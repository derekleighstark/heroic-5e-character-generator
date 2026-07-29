import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { ClassicLevel } from "classic-level";
import { npcArchetypes, npcDayPlayers, npcCreatures } from "../../src/npc-data.js";
import { readyTemplates } from "../../src/ready-template-data.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const project = path.resolve(root, "..");
const idFor = value => crypto.createHash("sha256").update(value).digest("hex").slice(0, 16);
const esc = value => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const html = value => String(value ?? "").split(/\n{2,}/).filter(Boolean).map(p => `<p>${esc(p).replaceAll("\n", "<br>")}</p>`).join("");
const abilityKeys = ["str","dex","con","fig","int","wis","cha","per"];
const skillKeys = ["acrobatics","athletics","culture","finesse","influence","insight","intimidation","investigation","medicine","notice","occult","science","stealth","streetwise","survival","technology","vehicles"];
const baseToken = (name, src, disposition = 1) => ({ name, displayName: 20, actorLink: true, width: 1, height: 1, texture: { src, anchorX: .5, anchorY: .5, fit: "contain", scaleX: 1, scaleY: 1, tint: "#ffffff", alphaThreshold: .75 }, disposition, displayBars: 20, bar1: { attribute: "hp" }, bar2: { attribute: "edge" }, sight: { enabled: false, range: 0, angle: 360, visionMode: "basic" } });
const item = (name, type, description, extra = {}) => ({ _id: idFor(`${type}:${name}:${description}`), name, type, img: ({power:"icons/svg/explosion.svg",talent:"icons/svg/upgrade.svg",merit:"icons/svg/aura.svg",flaw:"icons/svg/downgrade.svg"})[type] || "icons/svg/book.svg", system: { description: html(description), subtype: type, action: "Passive", category: type, source: "Heroic 5e v2.4", prerequisite: "", tier: "", powerSet: "", cost: Number(name.match(/(?:^|\s)([1-3])(?:\s|$)/)?.[1] || 0), tags: "", ability: "str", attackBonus: 0, damage: "", effect: "", uses: {value:0,max:0}, quantity:1, equipped:true }, effects:[], folder:null, sort:0, ownership:{default:0}, flags:{}, ...extra });

function readyActor(t) {
  const trainedSaves = new Set(t.saveTraining.toLowerCase().match(/str|dex|con|fig|int|wis|cha|per/g) || []);
  const skillText = t.skills.toLowerCase();
  const abilities = Object.fromEntries(abilityKeys.map(k => [k, { value: Number(t.abilities[k] ?? 10), trained: trainedSaves.has(k) }]));
  const skills = Object.fromEntries(skillKeys.map(k => [k, { trained: new RegExp(`\\b${k}\\b`, "i").test(skillText), expertise: false }]));
  const embedded = [];
  for (const line of t.powerSets.split(/\n-\s*|\n+/).filter(Boolean)) embedded.push(item(line.split(/\s+-\s+/)[0], "power", line, { system: { ...item("x","power","").system, description: html(line), subtype:"Power Set", category:"Power Set", source:"Heroic 5e v2.4", cost:0, powerSet:line.split(/\s+\d/)[0] } }));
  const powerPattern=/(?:^|\n|\.\s+)([A-Z][A-Za-z0-9 '\/-]+?)\s*\(([^)]+)\):\s*(.*?)(?=(?:\n|\.\s+)[A-Z][A-Za-z0-9 '\/-]+?\s*\([^)]+\):|$)/gs;
  for(const match of t.powers.matchAll(powerPattern)) {
    const [,name,usage,text]=match;
    const action=usage.split(/\s*[,-]\s*/).find(value=>/Action|Reaction|Bonus Action|Free Action/i.test(value))||usage;
    embedded.push(item(name.trim(),"power",`${usage}: ${text.trim()}`,{system:{...item("x","power","").system,description:html(text.trim()),subtype:usage,category:/Utility/i.test(usage)?"Utility":"Power",action,source:"Heroic 5e v2.4",effect:text.trim()}}));
  }
  for (const line of t.talents.split(/\n-\s*|\n+/).filter(x => /Talent:/.test(x))) embedded.push(item(line.replace(/^.*Talent:\s*/, "").split(/\s+-\s+/)[0], "talent", line));
  for (const [type, text] of [["merit",t.merits],["flaw",t.flaws]]) for (const name of text.split(/\s*[·;]\s*/).filter(Boolean)) embedded.push(item(name.replace(/\s*\(Origin\).*/, "").trim(), type, name));
  return { _id:idFor(`ready:${t.name}`), name:t.name, type:"character", img:"systems/heroic5e/assets/branding/heroic-5e-logo.png", system:{ biography:`<h2>${esc(t.name)}</h2>${html(t.description)}<h3>Origin</h3><p>${esc(t.origin)}</p><h3>Power Sets</h3>${html(t.powerSets)}<h3>Powers</h3>${html(t.powers)}<h3>Class Features</h3>${html(t.classFeatures)}<h3>Playing This Hero</h3>${html(t.playing)}`, notes:html(t.text), side:"Heroic", calling:t.calling, triggers:{minor:"",major:"",defining:""}, level:1, rank:t.rank, className:t.className, powerAbility:t.powerAbility, abilities, skills, hp:{value:t.hp,max:t.hp}, tempHp:0, edge:{value:t.edge,max:t.edge}, burnout:{value:0,max:6}, recovery:{value:1,max:1}, speed:Number(t.speed.match(/\d+/)?.[0] || 30), conditions:"", schemaVersion:1 }, prototypeToken:baseToken(t.name,"systems/heroic5e/assets/branding/heroic-5e-logo.png"), items:embedded, effects:[], folder:null, sort:0, ownership:{default:0}, flags:{} };
}

function npcActor(n) {
  const hp = Number(String(n.hp).match(/\d+/)?.[0] || 10);
  return { _id:idFor(`npc:${n.id}`), name:n.name, type:"npc", img:"icons/svg/mystery-man.svg", system:{ concept:[n.category,n.examples].filter(Boolean).join(" - "), side:n.side, powerTier:n.powerTier, minionTier:n.minionTier, boss:false, conScore:10 + 2 * Number(n.abilities.con || 0), bonusHp:0, hp:{value:hp,max:hp}, tempHp:0, speed:n.speed || "30 ft", primaryAbility:"fig", effectAbility:"str", abilities:Object.fromEntries(abilityKeys.map(k=>[k,{mod:Number(n.abilities[k]||0)}])), classAbilities:html([n.attacks,n.damage,n.equipment,n.special].filter(Boolean).join("\n\n")), powers:html(n.powerSets), skillsText:html(n.skills), talentsText:html(n.talents), meritsText:html(n.merits), flawsText:html(n.flaws), notes:html([n.notes,n.text].filter(Boolean).join("\n\n")), conditions:"", schemaVersion:1 }, prototypeToken:baseToken(n.name,"icons/svg/mystery-man.svg", n.side === "Villainous" ? -1 : 0), items:[], effects:[], folder:null, sort:0, ownership:{default:0}, flags:{} };
}

function generatorActor(file, portrait, token = portrait) {
  const sheet = JSON.parse(fs.readFileSync(file,"utf8")).sheet;
  const scores = Object.fromEntries(abilityKeys.map(k=>[k,{value:Number(sheet[`${k}Score`]||10),trained:Boolean(sheet[`save_${k}_trained`])}]));
  const skills = Object.fromEntries(skillKeys.map(k=>[k,{trained:Boolean(sheet[`skill_${k}_trained`]),expertise:Boolean(sheet[`skill_${k}_expertise`])}]));
  const items=[];
  for (const [type,key] of [["talent","talents"],["merit","merits"],["flaw","flaws"]]) for (const line of String(sheet[key]||"").split("\n").filter(Boolean)) items.push(item(line.split(":")[0].trim(),type,line));
  for (let i=1;i<=3;i++) if(sheet[`powerSet${i}`]) {
    const setName=sheet[`powerSet${i}`], notes=sheet[`powerSet${i}Notes`]||"";
    items.push(item(setName,"power",notes,{system:{...item("x","power","").system,description:html(notes),subtype:"Power Set",category:"Power Set",powerSet:setName,source:"Heroic 5e v2.4"}}));
    for (const line of notes.split("\n")) {
      const match=line.trim().match(/^(.+?)\s*\(([^)]+)\):\s*(.+)$/);
      if (!match) continue;
      const [,name,usage,text]=match;
      const action=usage.split(/\s*[,-]\s*/).find(value=>/Action|Reaction|Bonus Action|Free Action/i.test(value))||usage;
      items.push(item(name.trim(),"power",`${usage}: ${text}`,{system:{...item("x","power","").system,description:html(text),subtype:usage,category:/Utility/i.test(usage)?"Utility":"Power",powerSet:setName,action,source:"Heroic 5e v2.4",effect:text}}));
    }
  }
  const con=Number(sheet.conScore||10), hp=Math.max(10, con + ({Bruiser:12,Guardian:12,Sentinel:10,Strategist:8,Striker:8,Vanguard:10,Warden:10,Beacon:8}[sheet.className]||10));
  return {_id:idFor(`hero:${sheet.heroName}`),name:sheet.heroName,type:"character",img:portrait,system:{biography:`<h2>${esc(sheet.realName)}</h2>${html(sheet.concept)}<h3>Backstory</h3>${html(sheet.backstory)}<h3>Costume</h3>${html(sheet.costume)}`,notes:html([sheet.specialties,sheet.proficiencies,sheet.classFeatures,sheet.enhancements,sheet.limitationsText,sheet.sessionNotes].filter(Boolean).join("\n\n")),side:sheet.side||"Heroic",calling:sheet.calling||"",triggers:{minor:sheet.minorTrigger||"",major:sheet.majorTrigger||"",defining:sheet.definingTrigger||""},level:Number(sheet.level||1),rank:sheet.rank||"Street Level",className:sheet.className||"Bruiser",powerAbility:sheet.powerAbility||"str",abilities:scores,skills,hp:{value:hp,max:hp},tempHp:0,edge:{value:3,max:3},burnout:{value:0,max:6},recovery:{value:1,max:1},speed:30,conditions:"",schemaVersion:1},prototypeToken:baseToken(sheet.heroName,token),items,effects:[],folder:null,sort:0,ownership:{default:0},flags:{}};
}

const streetDir=path.join(root,"sample-actors","street-angels");
const assetSlug={"Ghost Fox":"ghost-fox","Madame Noir":"madame-noir","Shield Maiden":"shield-maiden"};
const streetAngels=fs.readdirSync(streetDir).filter(f=>f.endsWith(".json")).map(f=>{const a=JSON.parse(fs.readFileSync(path.join(streetDir,f),"utf8")); const slug=assetSlug[a.name]||a.name.toLowerCase().replaceAll(" ","-"); a._id=idFor(`hero:${a.name}`); a.img=`systems/heroic5e/assets/characters/street-angels/${slug}/portrait.png`; a.prototypeToken={...a.prototypeToken,...baseToken(a.name,`systems/heroic5e/assets/characters/street-angels/${slug}/token.png`)}; delete a._stats; return a;});
const featured=[generatorActor(path.join(project,"sample-characters","motor-city-sentinel-jake-fulton-import.json"),"systems/heroic5e/assets/characters/motor-city-sentinel/portrait.png"),generatorActor(path.join(project,"sample-characters","wraith-eddie-swazey-import.json"),"systems/heroic5e/assets/characters/wraith/portrait.png","systems/heroic5e/assets/characters/wraith/token.png")];
const threshold=JSON.parse(fs.readFileSync(path.join(root,"sample-actors","threshold.json"),"utf8"));
threshold._id=idFor("hero:Threshold");
delete threshold._stats;
const ready=readyTemplates.map(readyActor), npcs=[...npcArchetypes,...npcDayPlayers,...npcCreatures].map(npcActor), heroes=[...streetAngels,...featured,threshold];

async function writePack(name, documents) { const dir=path.join(root,"packs",name); fs.rmSync(dir,{recursive:true,force:true}); fs.mkdirSync(dir,{recursive:true}); const db=new ClassicLevel(dir,{keyEncoding:"utf8",valueEncoding:"json"}); await db.open(); await db.batch(documents.map(d=>({type:"put",key:`!actors!${d._id}`,value:d}))); await db.close(); return documents.length; }
for(const [name,docs] of [["ready-templates",ready],["npcs-opponents",npcs],["featured-heroes",heroes]]) console.log(name,await writePack(name,docs));
for(const actor of featured) fs.writeFileSync(path.join(root,"sample-actors",`${actor.name.toLowerCase().replaceAll(" ","-")}.json`),JSON.stringify(actor,null,2)+"\n");
