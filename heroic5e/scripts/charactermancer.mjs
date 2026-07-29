import { ABILITIES, SKILLS, CLASSES, RANKS } from "./config.mjs";

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;
const ARRAYS = {
  "Street Level": [16,15,14,13,12,11,10,8], "Mid-Level": [18,16,15,14,13,12,10,8], "World Class": [20,18,16,15,14,12,10,8]
};
const ORIGINS = {
  Alien:{primary:["con","int","per","cha"],skills:["culture","insight","notice","science","survival","technology"],picks:1,talent:"Not From Here",merit:"Strange Biology",flaw:"Alien Outsider"},
  Artificial:{primary:["int","con","str"],skills:["investigation","science","stealth","technology","vehicles"],picks:1,talent:"Synthetic Edge",merit:"Synthetic Construction",flaw:"Constructed Nature"},
  Cosmic:{primary:["cha","con","wis"],skills:["science","occult","notice","survival","influence"],picks:1,talent:"Stellar Endurance",merit:"Cosmic Signature",flaw:"Too Bright to Hide"},
  Enhanced:{primary:["str","con","dex"],skills:["athletics","intimidation","science","stealth","survival"],picks:1,talent:"Adaptive Biology",merit:"Altered Physiology",flaw:"Marked by Change"},
  Gearbound:{primary:["int","dex","fig"],skills:["acrobatics","investigation","science","technology","vehicles"],picks:1,talent:"Field Systems",merit:"Gear Access",flaw:"Gear Dependency"},
  Legacy:{primary:["cha","fig","wis"],skills:["athletics","influence","insight","investigation","streetwise"],picks:1,talent:"Inherited Instinct",merit:"The Name",flaw:"The Expectation"},
  Monster:{primary:["str","con","per"],skills:["athletics","intimidation","notice","stealth","survival"],picks:1,talent:"Apex Predator",merit:"Inhuman Body",flaw:"Feared"},
  Mystic:{primary:["wis","cha","int"],skills:["insight","occult","notice","influence","investigation"],picks:1,talent:"Ward the Soul",merit:"Mystic Attunement",flaw:"Supernatural Burden"},
  Trained:{primary:["fig","dex","int"],skills:["acrobatics","athletics","investigation","notice","stealth","streetwise","technology","vehicles"],picks:2,talent:"Trained to Survive",merit:"Prepared Foundation",flaw:"Only Human"},
  Transcendent:{primary:["wis","cha","con"],skills:["insight","occult","notice","science","influence"],picks:1,talent:"Beyond the Moment",merit:"Beyond Mortal",flaw:"Losing Humanity"}
};
const SECONDARY = {
  Alien:{con:["str","wis","per"],int:["per","wis","cha"],per:["int","wis","dex"],cha:["wis","con","int"]}, Artificial:{int:["con","per","str"],con:["int","str","per"],str:["int","con","fig"]}, Cosmic:{cha:["con","wis","per"],con:["cha","str","wis"],wis:["cha","per","int"]}, Enhanced:{str:["con","dex","per"],con:["str","dex","wis"],dex:["str","con","per"]}, Gearbound:{int:["dex","per","fig"],dex:["int","per","fig"],fig:["int","dex","per"]}, Legacy:{cha:["int","wis","fig"],fig:["cha","dex","per"],wis:["cha","int","per"]}, Monster:{str:["con","per","wis"],con:["str","wis","cha"],per:["str","con","dex"]}, Mystic:{wis:["cha","int","per"],cha:["wis","int","con"],int:["wis","cha","per"]}, Trained:{fig:["dex","int","per","wis"],dex:["fig","int","per","cha"],int:["fig","dex","per","wis"]}, Transcendent:{wis:["cha","con","per"],cha:["wis","con","int"],con:["wis","cha","str"]}
};

export class HeroicCharactermancer extends HandlebarsApplicationMixin(ApplicationV2) {
  constructor({ actor, ...options } = {}) { super(options); this.actor = actor; this.step = 0; this.maxReached = 0; this.choiceTab = "merits"; }
  static DEFAULT_OPTIONS = { id: "heroic5e-charactermancer", classes: ["heroic5e", "charactermancer"], position: { width: 820, height: 760 }, tag: "form", window: { title: "Heroic 5e Charactermancer", resizable: true }, form: { closeOnSubmit: false, handler: HeroicCharactermancer.onFinish } };
  static PARTS = { main: { template: "systems/heroic5e/templates/charactermancer.hbs" } };

  async _prepareContext(options) {
    const indexes = {};
    for (const name of ["origins","classes","talents","merits","flaws","callings","powers"]) {
      const pack = game.packs.get(`heroic5e.${name}`);
      indexes[name] = pack ? [...await pack.getIndex({ fields: ["system.category","system.subtype","system.powerSet","system.description","system.source","system.cost","system.triggerMinor","system.triggerMajor","system.triggerDefining"] })] : [];
    }
    this.choiceIndexes=indexes;
    const steps = ["Identity","Origin & Class","Abilities","Skills & Talent","Merits, Flaws & Powers","Finish"]
      .map((label, index) => ({ number: index + 1, label }));
    return { ...(await super._prepareContext(options)), actor:this.actor, abilities:ABILITIES, skills:SKILLS, classes:indexes.classes, origins:indexes.origins, talents:indexes.talents.filter(i=>i.system.category!=="Origin Talent"), merits:indexes.merits.filter(i=>i.system.category!=="Origin Merit"), flaws:indexes.flaws.filter(i=>i.system.category!=="Origin Flaw"), callings:indexes.callings, sides:{Heroic:"Heroic",Unaligned:"Unaligned"}, powerSets:indexes.powers.filter(i=>i.system.category==="Power Set"), ranks:Object.fromEntries(Object.keys(RANKS).map(name => [name, name])), array:ARRAYS["Street Level"], steps };
  }

  _onRender(context, options) {
    super._onRender(context, options);
    this._showStep();
    this.element.querySelectorAll("[data-mancer-next]").forEach(b=>b.addEventListener("click",()=>{ if(this._validateStep()) { this.step=Math.min(5,this.step+1);this.maxReached=Math.max(this.maxReached,this.step);this._showStep(); }}));
    this.element.querySelectorAll("[data-mancer-back]").forEach(b=>b.addEventListener("click",()=>{ this.step=Math.max(0,this.step-1); this._showStep(); }));
    this.element.querySelectorAll("[data-mancer-jump]").forEach(button=>button.addEventListener("click",()=>{const target=Number(button.dataset.mancerJump);if(target<=this.maxReached){this.step=target;this._showStep();}}));
    this.element.querySelectorAll("[data-choice-tab]").forEach(button=>button.addEventListener("click",()=>{this.choiceTab=button.dataset.choiceTab;this._showChoiceTab();}));
    this.element.querySelector("[name='rank']")?.addEventListener("change",e=>this._setArray(e.target.value));
    this.element.querySelector("[name='origin']")?.addEventListener("change",()=>{this._syncOriginBonuses();this._syncOriginSkills();});
    this.element.querySelector("[name='primaryBonus']")?.addEventListener("change",()=>this._syncSecondaryBonus());
    this.element.querySelector("[name='originSkill1']")?.addEventListener("change",()=>this._syncOriginSkills());
    this.element.querySelector("[name='originSkill2']")?.addEventListener("change",()=>this._syncOriginSkills());
    this.element.querySelectorAll("[data-choice-preview]").forEach(control=>control.addEventListener("change",()=>this._updateChoicePreviews()));
    this.element.querySelectorAll("[data-budget-choice]").forEach(control=>control.addEventListener("change",()=>{this._syncRatedChoices(control);this._updateBudgets();this._updateChoicePreviews();}));
    this.element.querySelectorAll("[data-ability-score]").forEach(input=>input.addEventListener("input",()=>this._updateArrayUsage()));
    this._syncOriginBonuses();
    this._syncOriginSkills();
    this._updateChoicePreviews();
    this._updateBudgets();
    this._updateArrayUsage();
    this._showChoiceTab();
  }
  _showStep(){ this.element.querySelectorAll("[data-mancer-step]").forEach((el,i)=>el.classList.toggle("active",i===this.step)); this.element.querySelectorAll(".mancer-progress li").forEach((el,i)=>{el.classList.toggle("active",i===this.step);el.classList.toggle("done",i<this.step);el.classList.toggle("available",i<=this.maxReached);}); }
  _showChoiceTab(){this.element.querySelectorAll("[data-choice-tab]").forEach(el=>el.classList.toggle("active",el.dataset.choiceTab===this.choiceTab));this.element.querySelectorAll("[data-choice-panel]").forEach(el=>el.classList.toggle("active",el.dataset.choicePanel===this.choiceTab));}
  _setArray(rank){ const values=ARRAYS[rank]; this.element.querySelectorAll("[data-ability-score]").forEach((input,i)=>input.value=values[i]); this._renderArrayTracker(values); this._updateArrayUsage(); }
  _renderArrayTracker(values){ const root=this.element.querySelector("[data-array-values]"); if(root) root.replaceChildren(...values.map(value=>{const chip=document.createElement("span");chip.dataset.arrayValue=String(value);chip.textContent=String(value);return chip;})); }
  _updateArrayUsage(){
    const expected=ARRAYS[this.element.querySelector("[name='rank']")?.value]??[];
    const assigned=[...this.element.querySelectorAll("[data-ability-score]")].map(input=>Number(input.value));
    const counts=new Map(assigned.map(value=>[value,assigned.filter(score=>score===value).length]));
    let used=0;
    this.element.querySelectorAll("[data-array-value]").forEach(chip=>{const count=counts.get(Number(chip.dataset.arrayValue))??0;chip.classList.toggle("used",count===1);chip.classList.toggle("duplicate",count>1);if(count===1) used++;});
    const invalid=assigned.some(value=>!expected.includes(value))||[...counts.values()].some(count=>count>1);
    this.element.querySelector(".mancer-array-tracker")?.classList.toggle("invalid",invalid);
    const status=this.element.querySelector("[data-array-status]"); if(status) status.textContent=invalid?"Check assignments":`${used} / ${expected.length} used`;
  }
  _setAbilityOptions(select, keys, placeholder){
    if(!select) return;
    const previous=select.value;
    select.replaceChildren();
    if(placeholder){const option=document.createElement("option");option.value="";option.textContent=placeholder;select.append(option);}
    for(const key of keys){const option=document.createElement("option");option.value=key;option.textContent=ABILITIES[key];select.append(option);}
    select.value=keys.includes(previous)?previous:(placeholder?"":keys[0]??"");
  }
  _syncOriginBonuses(){
    const originKey=this.element.querySelector("[name='origin']")?.value;
    const primary=this.element.querySelector("[name='primaryBonus']");
    const allowed=ORIGINS[originKey]?.primary??[];
    this._setAbilityOptions(primary,allowed,originKey?"":"Choose an Origin first");
    this._syncSecondaryBonus();
  }
  _syncSecondaryBonus(){
    const originKey=this.element.querySelector("[name='origin']")?.value;
    const primaryKey=this.element.querySelector("[name='primaryBonus']")?.value;
    const secondary=this.element.querySelector("[name='secondaryBonus']");
    const allowed=SECONDARY[originKey]?.[primaryKey]??[];
    this._setAbilityOptions(secondary,allowed,primaryKey?"":"Choose +2 first");
  }
  _syncOriginSkills(){
    const originKey=this.element.querySelector("[name='origin']")?.value;
    const origin=ORIGINS[originKey];
    const first=this.element.querySelector("[name='originSkill1']"), second=this.element.querySelector("[name='originSkill2']");
    const allowed=new Set(origin?.skills??[]);
    const updateOptions=(select,exclude="")=>{if(!select)return;for(const option of select.options){if(!option.value)continue;option.disabled=!allowed.has(option.value)||option.value===exclude;}if(select.value&&select.selectedOptions[0]?.disabled)select.value="";};
    updateOptions(first,second?.value??"");
    if(first) first.disabled=!origin;
    const hasSecond=(origin?.picks??0)>1;
    if(second){second.disabled=!hasSecond;if(!hasSecond)second.value="";updateOptions(second,first?.value??"");}
    const chosen=new Set([first?.value,second?.value].filter(Boolean));
    this.element.querySelectorAll("[name^='skills.']").forEach(control=>{const key=control.name.slice("skills.".length);control.disabled=chosen.has(key);if(control.disabled)control.checked=false;control.closest("label")?.classList.toggle("unavailable",control.disabled);});
    const secondLabel=second?.closest("label");if(secondLabel)secondLabel.classList.toggle("unavailable",!hasSecond);
  }
  _choiceEntry(packName, value){return (this.choiceIndexes?.[packName]??[]).find(entry=>entry._id===value||entry.name===value);}
  _syncRatedChoices(changed){
    if(!changed?.checked)return;
    const group=changed.dataset.budgetChoice, base=changed.dataset.baseName;
    this.element.querySelectorAll(`[data-budget-choice='${group}'][data-base-name='${base}']`).forEach(control=>{if(control!==changed)control.checked=false;});
  }
  _updateBudgets(){
    for(const group of ["merits","flaws"]){const selected=[...this.element.querySelectorAll(`[data-budget-choice='${group}']:checked`)];const total=selected.reduce((sum,control)=>sum+Number(control.dataset.cost||0),0);const status=this.element.querySelector(`[data-${group}-budget]`);if(status){status.textContent=`${total} / 3 points`;status.classList.toggle("complete",total===3);status.classList.toggle("over",total>3);}}
  }
  _renderChoiceCard(target, entry, emptyText){
    if(!target) return;
    target.replaceChildren();
    if(!entry){const empty=document.createElement("p");empty.className="choice-preview-empty";empty.textContent=emptyText;target.append(empty);return;}
    const heading=document.createElement("h4");heading.textContent=entry.name;
    const body=document.createElement("div");body.className="choice-preview-description";body.innerHTML=entry.system?.description||"<p>No description is available.</p>";
    target.append(heading,body);
  }
  _updateChoicePreviews(){
    const selected=name=>this.element.querySelector(`[name='${name}']`)?.value??"";
    this._renderChoiceCard(this.element.querySelector("[data-origin-preview]"),this._choiceEntry("origins",selected("origin")),"Choose an Origin to see its traits, talent, merit, flaw, and skill options.");
    this._renderChoiceCard(this.element.querySelector("[data-class-preview]"),this._choiceEntry("classes",selected("className")),"Choose a Class to see its role and class features.");
    this._renderChoiceCard(this.element.querySelector("[data-talent-preview]"),this._choiceEntry("talents",selected("talentName")),"Choose a Talent to see what it provides.");
    this._renderChoiceCard(this.element.querySelector("[data-calling-preview]"),this._choiceEntry("callings",selected("calling")),"Choose a Calling to see its Minor, Major, and Defining Edge triggers.");
    for(const group of ["merits","flaws"]){const target=this.element.querySelector(`[data-${group}-preview]`);if(target){target.replaceChildren();for(const control of this.element.querySelectorAll(`[data-budget-choice='${group}']:checked`)){const card=document.createElement("article");card.className="choice-preview-card";this._renderChoiceCard(card,this._choiceEntry(group,control.name.slice(`${group}.`.length)),"");target.append(card);}}}
    const powerTarget=this.element.querySelector("[data-powers-preview]");
    if(powerTarget){powerTarget.replaceChildren();const checked=[...this.element.querySelectorAll("[name^='powerSets.']:checked")];if(!checked.length){const empty=document.createElement("p");empty.className="choice-preview-empty";empty.textContent="Choose one or more Power Sets to review their starting benefits.";powerTarget.append(empty);}else for(const control of checked){const card=document.createElement("article");card.className="choice-preview-card";this._renderChoiceCard(card,this._choiceEntry("powers",control.name.slice("powerSets.".length)),"");powerTarget.append(card);}}
  }
  _validateStep(){
    if(this.step===0&&!this.element.querySelector("[name='heroName']").value.trim()){ui.notifications.warn("Enter a hero name.");return false;}
    if(this.step===1){
      const originKey=this.element.querySelector("[name='origin']")?.value, className=this.element.querySelector("[name='className']")?.value;
      const primary=this.element.querySelector("[name='primaryBonus']")?.value, secondary=this.element.querySelector("[name='secondaryBonus']")?.value;
      if(!originKey||!className){ui.notifications.warn("Choose an Origin and Class.");return false;}
      if(!ORIGINS[originKey]?.primary.includes(primary)||!SECONDARY[originKey]?.[primary]?.includes(secondary)){ui.notifications.warn("Choose the listed +2 and +1 abilities for this Origin.");return false;}
    }
    return true;
  }

  static async onFinish(event, form, formData) {
    const data=foundry.utils.expandObject(formData.object ?? {});
    data.abilities ??= {};
    data.skills ??= {};
    data.powerSets ??= {};
    data.merits ??= {};
    data.flaws ??= {};
    const origin=ORIGINS[data.origin], cls=CLASSES[data.className];
    if(!origin||!cls) return ui.notifications.error("Choose an Origin and Class.");
    const scores=Object.values(data.abilities).map(Number), required=[...ARRAYS[data.rank]].sort((a,b)=>a-b), assigned=[...scores].sort((a,b)=>a-b);
    if(JSON.stringify(required)!==JSON.stringify(assigned)) return ui.notifications.error(`Assign each ${data.rank} array score exactly once.`);
    if(!origin.primary.includes(data.primaryBonus)||!SECONDARY[data.origin]?.[data.primaryBonus]?.includes(data.secondaryBonus)) return ui.notifications.error("Choose +2 and +1 abilities permitted by the selected Origin.");
    const originSkillKeys=[data.originSkill1,data.originSkill2].filter(Boolean);
    if(originSkillKeys.length!==origin.picks||originSkillKeys.some(k=>!origin.skills.includes(k))) return ui.notifications.error(`Choose ${origin.picks} listed Origin skill${origin.picks===1?"":"s"}.`);
    const selectedSkills=Object.entries(data.skills||{}).filter(([,v])=>v).map(([k])=>k), skillLimit=data.talentName==="Skilled"?6:4;
    if(selectedSkills.length!==skillLimit) return ui.notifications.error(`Choose exactly ${skillLimit} additional Skills.`);
    if(selectedSkills.some(k=>originSkillKeys.includes(k))) return ui.notifications.error("Additional Skills must be different from Origin Skills.");
    if(!data.talentName||!data.calling) return ui.notifications.error("Choose a starting Talent and Calling.");
    const meritIds=Object.entries(data.merits||{}).filter(([,v])=>v).map(([id])=>id), flawIds=Object.entries(data.flaws||{}).filter(([,v])=>v).map(([id])=>id);
    const meritPoints=meritIds.reduce((sum,id)=>sum+Number(this._choiceEntry("merits",id)?.system.cost||0),0), flawPoints=flawIds.reduce((sum,id)=>sum+Number(this._choiceEntry("flaws",id)?.system.cost||0),0);
    if(meritPoints!==3||flawPoints!==3) return ui.notifications.error("Standard Start requires exactly 3 points of Merits and 3 points of Flaws. Origin traits do not count.");
    const selectedSets=Object.entries(data.powerSets||{}).filter(([,v])=>v).map(([id])=>id), maxSets={"Street Level":3,"Mid-Level":5,"World Class":7}[data.rank];
    if(!selectedSets.length||selectedSets.length>maxSets) return ui.notifications.error(`Choose 1-${maxSets} Power Sets.`);
    const abilityUpdate={}; for(const [key,value] of Object.entries(data.abilities)) abilityUpdate[key]={value:Number(value)+(key===data.primaryBonus?2:0)+(key===data.secondaryBonus?1:0),trained:cls.saves.includes(key)};
    const trained=new Set([...originSkillKeys,...selectedSkills]); const skillUpdate={}; for(const key of Object.keys(SKILLS)) skillUpdate[key]={trained:trained.has(key),expertise:false};
    const calling=this._choiceEntry("callings",data.calling);
    await this.actor.update({name:data.heroName,"system.rank":data.rank,"system.level":1,"system.className":data.className,"system.powerAbility":data.powerAbility,"system.side":data.side||"Heroic","system.calling":calling?.name||"","system.triggers":{minor:calling?.system.triggerMinor||"",major:calling?.system.triggerMajor||"",defining:calling?.system.triggerDefining||""},"system.abilities":abilityUpdate,"system.skills":skillUpdate,"system.tough":data.talentName==="Tough"});
    await this._addSelections(data, origin, selectedSets, meritIds, flawIds);
    await this.actor.update({"system.hp.value":this.actor.system.calculatedHpMax,"system.hp.max":this.actor.system.calculatedHpMax,"system.edge.value":RANKS[data.rank].edgeStart,"system.edge.max":this.actor.system.calculatedEdgeMax});
    ui.notifications.info(`${data.heroName} is ready for heroic action.`); await this.close(); this.actor.sheet.render({force:true});
  }
  async _addSelections(data, origin, selectedSets, meritIds, flawIds){
    const wanted={origins:[data.origin],classes:[data.className],talents:[origin.talent,data.talentName],merits:[origin.merit],flaws:[origin.flaw],callings:[data.calling]}; const creates=[];
    for(const [packName,names] of Object.entries(wanted)){const pack=game.packs.get(`heroic5e.${packName}`);const index=await pack.getIndex({fields:["system.category"]});for(const name of names.filter(Boolean)){const hit=[...index].find(i=>i._id===name||i.name===name||i.name.startsWith(`${name} `));if(hit){const doc=(await pack.getDocument(hit._id)).toObject();delete doc._id;delete doc.folder;creates.push(doc);}}}
    for(const [packName,ids] of [["merits",meritIds],["flaws",flawIds]]){const pack=game.packs.get(`heroic5e.${packName}`);for(const id of ids){const doc=(await pack.getDocument(id)).toObject();delete doc._id;delete doc.folder;creates.push(doc);}}
    const powerPack=game.packs.get("heroic5e.powers"), pIndex=[...await powerPack.getIndex({fields:["system.category","system.powerSet"]})];
    for(const id of selectedSets){const overview=pIndex.find(i=>i._id===id);for(const hit of pIndex.filter(i=>i._id===id||(i.system.powerSet===overview?.name&&i.system.category==="Core Track"&&i.name.endsWith(" 1")))){const doc=(await powerPack.getDocument(hit._id)).toObject();delete doc._id;delete doc.folder;creates.push(doc);}}
    const existing=new Set(this.actor.items.map(i=>`${i.type}:${i.name}`)); return this.actor.createEmbeddedDocuments("Item",creates.filter(i=>!existing.has(`${i.type}:${i.name}`)));
  }
}
