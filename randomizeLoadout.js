import { primaries, secondaries, grenades, armors, boosters, stratagems } from "./data.js";

const primary = primaries[Math.floor(Math.random() * primaries.length)];
const secondary = secondaries[Math.floor(Math.random() * secondaries.length)];
const grenade = grenades[Math.floor(Math.random() * grenades.length)];
const armor = armors[Math.floor(Math.random() * armors.length)];
const booster = boosters[Math.floor(Math.random() * boosters.length)];

function randomizeStratagems() {
  const stratagemList = [];
  let backpack = false;
  let supportWeapon = false;

  while (true) {
    if (stratagemList.length >= 4) break;

    const stratagem = stratagems[Math.floor(Math.random() * stratagems.length)];
    if (stratagemList.includes(stratagem.name)) continue;
    if (backpack && stratagem.backpack) continue;
    if (supportWeapon && stratagem.supportWeapon) continue;

    stratagemList.push(stratagem.name);
    if (stratagem.backpack) backpack = true;
    if (stratagem.supportWeapon) supportWeapon = true;
  }

  return stratagemList;
}

const allStratagems = randomizeStratagems();

console.log("Primary: " + primary);
console.log("Secondary: " + secondary);
console.log("Grenade: " + grenade);
console.log("Armor: " + armor);
console.log("Booster: " + booster);
console.log("Stratagems: " + allStratagems);
