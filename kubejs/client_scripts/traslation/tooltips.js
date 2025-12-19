const tooltipLangs = [
  "en_us",
  "it_it"
];
const tooltipsStrings = {
  //-------------------------------------------// compact machines
  "machine.compactmachines.colossal": [
    "Compact Machine - Colossal - (13x13x13) ",
    "Compact Machine - Colossal - (13x13x13) ",
  ],
  "machine.compactmachines.giant": [
    "Compact Machine - Giant - (11x11x11)",
    "Compact Machine - Giant - (11x11x11)",
  ],
  "machine.compactmachines.large": [
    "Compact Machine - Large - (9x9x9)",
    "Compact Machine - Large - (9x9x9)",
  ],
  "machine.compactmachines.normal": [
    "Compact Machine - Normal - (7x7x7)",
    "Compact Machine - Normal - (7x7x7)",
  ],
  "machine.compactmachines.small": [
    "Compact Machine - Small - (5x5x5)",
    "Compact Machine - Small - (5x5x5)",
  ],
  "machine.compactmachines.soaryn": [
    "Compact Machine - Soaryn - (45x45x45)",
    "Compact Machine - Soaryn - (45x45x45)",
  ],
  "machine.compactmachines.farming": [
    "Compact Machine - Farming - (21x11x21)",
    "Compact Machine - Farming - (21x11x21)",
  ],
  "machine.compactmachines.tiny": [
    "Compact Machine - Tiny - (3x3x3)",
    "Compact Machine - Tiny - (3x3x3)",
  ],
  //-------------------------------------------// kubejs oredic
  "item.techacademy.ore_dictionary.tooltip1": [
    "Allows you to §oconvert§r an item in its §ounified version§r based on its tags",
    "Permette di §oconvertire§r un elemento nella sua versione §ounificata§r in base ai suoi tag",
  ],
  "item.techacademy.ore_dictionary.tooltip2": [
    "§e§lUseful after updates in case of pack changes at the unification system§r",
    "§e§lUtile dopo gli aggiornamenti, in caso di modifiche del pacchetto nel sistema di unificazione§r",
  ],
  //-------------------------------------------// easy mods
  "item.techacademy.easy_villagers.desc": [
    "Shift-Right Click on a villager to pick-up as item form",
    "Shift-Right Click su un villico per prenderlo in forma di item",
  ],
  "item.techacademy.easy_piglins.desc": [
    "Shift-Right Click on a piglin to pick-up as item form",
    "Shift-Right Click su un piglin per prenderlo in forma di item",
  ],
  //-------------------------------------------// newblock
  "item.techacademy.newblock.tip": [
    "Shift-Right Click on a block to pick-up as item form",
    "Shift-Right Click su un blocco per prenderlo in forma di item",
  ],
  //-------------------------------------------// unfixable problem with replicaAE2bridge
  "item.techacademy.replica_ae2bridge.tip1": [
    "§c§lWARNING: May cause CRASHES and FREEZES§r",
    "§c§lATTENZIONE: Può causare CRASH e FREEZE§r",
  ],
  "item.techacademy.replica_ae2bridge.tip2": [  
    "§c§lplacing this block in a compact machine!§r",
    "§c§lpiazzando questo blocco in una compact machine!§r",
  ],
  //-------------------------------------------// extra hostile neural network stacking problem
  "item.techacademy.extrahann_upgrade.tip1": [
    "§e§lWARNING: Using more than one upgrade§r",
    "§e§lATTENZIONE: Usare più di un upgrade§r",
  ],
  "item.techacademy.extrahann_upgrade.tip2": [
    "§e§lwill not increase anything, use only one!§r",
    "§e§lnon aumenterà nulla, usane solo uno!§r",
  ],
}

guiLangs.forEach((lang, langIndex) => {
  ClientEvents.lang(lang, (event) => {
    let text;
    Object.keys(tooltipsStrings).forEach((entry) => {
      if (typeof tooltipsStrings[entry][langIndex] === "")
        text = "MISSING TRANSLATION";
      else
        text = tooltipsStrings[entry][langIndex];
      event.add(entry, text);
    });
  });
})

