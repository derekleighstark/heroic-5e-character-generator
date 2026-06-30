const STORAGE_KEY = "heroic5e_standalone_sheet_v1";
const form = document.querySelector("#characterSheet");
const status = document.querySelector("#saveStatus");
const abilities = [["str", "Strength"], ["dex", "Dexterity"], ["con", "Constitution"], ["fig", "Fighting"], ["int", "Intelligence"], ["wis", "Wisdom"], ["per", "Perception"], ["cha", "Charisma"]];
const skills = [["Acrobatics", "dex"], ["Athletics", "str"], ["Influence", "cha"], ["Insight", "wis"], ["Intimidation", "cha"], ["Investigation", "int"], ["Medicine", "int"], ["Notice", "per"], ["Occult", "wis"], ["Science", "int"], ["Sleight", "dex"], ["Stealth", "dex"], ["Streetwise", "cha"], ["Survival", "wis"], ["Technology", "int"], ["Vehicles", "dex"]];
const conditionNames = ["Blinded", "Dazed", "Restrained", "Shaken", "Prone", "Stunned", "Incapacitated", "Other"];
let rollMode = "normal";
let history = [];

document.querySelector("#abilities").innerHTML = abilities.map(([key, label]) => `<div class="ability"><strong>${label}</strong><label>Score<input name="ability_${key}" type="number" value="10"></label><span class="modifier" data-modifier="${key}">+0</span><button type="button" data-ability-roll="${key}">Roll</button></div>`).join("");
document.querySelector("#skills").innerHTML = skills.map(([label, ability], index) => `<div class="skill"><button type="button" data-skill-roll="${index}">${label} <small>(${ability.toUpperCase()})</small></button><input aria-label="${label} trained" name="skill_${index}_trained" type="checkbox"><input aria-label="${label} expertise" name="skill_${index}_expert" type="checkbox"><input aria-label="${label} specialty" name="skill_${index}_specialty"></div>`).join("");
document.querySelector("#conditions").innerHTML = conditionNames.map(name => `<label><input name="condition_${name.toLowerCase()}" type="checkbox">${name}</label>`).join("");
document.querySelector("#quickDice").innerHTML = [4, 6, 8, 10, 12, 20, 100].map(sides => `<button type="button" data-quick-die="${sides}">d${sides}</button>`).join("");

function modifier(score) { return Math.floor((Number(score || 10) - 10) / 2); }
function signed(value) { return Number(value) >= 0 ? `+${value}` : String(value); }
function safeName() { return (form.elements.heroName.value || "heroic-5e-character").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase(); }

function dataFromForm() {
  const data = {};
  form.querySelectorAll("[name]").forEach(control => { data[control.name] = control.type === "checkbox" ? control.checked : control.value; });
  return data;
}

function applyData(data = {}) {
  form.querySelectorAll("[name]").forEach(control => {
    if (!(control.name in data)) return;
    if (control.type === "checkbox") control.checked = Boolean(data[control.name]);
    else control.value = data[control.name] ?? "";
  });
  updateCalculatedFields();
}

function saveLocal() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataFromForm()));
  status.textContent = `Autosaved ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
}

function updateCalculatedFields() {
  abilities.forEach(([key]) => {
    const value = modifier(form.elements[`ability_${key}`].value);
    document.querySelector(`[data-modifier="${key}"]`).textContent = signed(value);
  });
  document.querySelector("#diceCharacter").textContent = form.elements.heroName.value || "Unnamed Hero";
}

function downloadSave() {
  const payload = { type: "HEROIC 5e Standalone Character Sheet", version: 1, savedAt: new Date().toISOString(), character: dataFromForm() };
  const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
  const link = document.createElement("a");
  link.href = url; link.download = `${safeName()}.heroic5e.json`; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  saveLocal();
}

function randomDie(sides) {
  const value = new Uint32Array(1); crypto.getRandomValues(value); return (value[0] % sides) + 1;
}

function roll(label, sides = 20, bonus = 0) {
  let dice = [randomDie(sides)];
  let kept = dice[0];
  if (sides === 20 && rollMode !== "normal") {
    dice.push(randomDie(20));
    kept = rollMode === "advantage" ? Math.max(...dice) : Math.min(...dice);
  }
  const total = kept + Number(bonus || 0);
  const detail = `d${sides}: [${dice.join(", ")}]${bonus ? ` ${signed(bonus)}` : ""}${rollMode !== "normal" && sides === 20 ? ` (${rollMode})` : ""}`;
  history.unshift({ label, total, detail }); history = history.slice(0, 20);
  document.querySelector("#rollLabel").textContent = label;
  document.querySelector("#rollTotal").textContent = total;
  document.querySelector("#rollDetail").textContent = detail;
  document.querySelector("#rollHistory").innerHTML = history.map(item => `<div><span><b>${item.label}</b><small>${item.detail}</small></span><strong>${item.total}</strong></div>`).join("");
  document.querySelector("#dicePanel").hidden = false;
}

form.addEventListener("input", () => { updateCalculatedFields(); saveLocal(); });
form.addEventListener("click", event => {
  const abilityButton = event.target.closest("[data-ability-roll]");
  const skillButton = event.target.closest("[data-skill-roll]");
  const customButton = event.target.closest("[data-custom-roll]");
  if (abilityButton) {
    const key = abilityButton.dataset.abilityRoll;
    roll(abilities.find(item => item[0] === key)[1], 20, modifier(form.elements[`ability_${key}`].value));
  }
  if (skillButton) {
    const index = Number(skillButton.dataset.skillRoll); const [label, ability] = skills[index];
    const rank = Number(form.elements.rankBonus.value || 0);
    const trained = form.elements[`skill_${index}_trained`].checked;
    const expert = form.elements[`skill_${index}_expert`].checked;
    roll(label, 20, modifier(form.elements[`ability_${ability}`].value) + (trained ? rank * (expert ? 2 : 1) : 0));
  }
  if (customButton) roll(customButton.dataset.customRoll.replace(/([A-Z])/g, " $1"), 20, Number(form.elements[customButton.dataset.customRoll].value || 0));
});

document.querySelector("#saveButton").addEventListener("click", downloadSave);
document.querySelector("#loadButton").addEventListener("click", () => document.querySelector("#loadFile").click());
document.querySelector("#loadFile").addEventListener("change", event => {
  const [file] = event.target.files; if (!file) return;
  const reader = new FileReader();
  reader.onload = () => { try { const payload = JSON.parse(reader.result); applyData(payload.character || payload); saveLocal(); } catch { alert("That file is not a valid HEROIC 5e character save."); } };
  reader.readAsText(file); event.target.value = "";
});
document.querySelector("#diceButton").addEventListener("click", () => document.querySelector("#dicePanel").hidden = false);
document.querySelector("#closeDice").addEventListener("click", () => document.querySelector("#dicePanel").hidden = true);
document.querySelector("#printButton").addEventListener("click", () => window.print());
document.querySelector("#clearButton").addEventListener("click", () => { if (confirm("Clear every field on this standalone sheet?")) { form.reset(); localStorage.removeItem(STORAGE_KEY); updateCalculatedFields(); } });
document.querySelectorAll("[data-mode]").forEach(button => button.addEventListener("click", () => { rollMode = button.dataset.mode; document.querySelectorAll("[data-mode]").forEach(item => item.classList.toggle("active", item === button)); }));
document.querySelector("#quickDice").addEventListener("click", event => { const button = event.target.closest("[data-quick-die]"); if (button) roll(`d${button.dataset.quickDie}`, Number(button.dataset.quickDie)); });

try { applyData(JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")); } catch { updateCalculatedFields(); }
