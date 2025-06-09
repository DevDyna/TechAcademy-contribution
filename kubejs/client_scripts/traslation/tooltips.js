const anyLang = {
  _key: [
    //-------------------------------------------// compact machines
    "machine.compactmachines.colossal",
    "machine.compactmachines.giant",
    "machine.compactmachines.large",
    "machine.compactmachines.normal",
    "machine.compactmachines.small",
    "machine.compactmachines.soaryn",
    "machine.compactmachines.farming",
    "machine.compactmachines.tiny",
    //-------------------------------------------// kubejs oredic
    "item.techacademy.ore_dictionary.tooltip1",
    "item.techacademy.ore_dictionary.tooltip2",
    //-------------------------------------------// buttons
    "techacademy.continue_button.key",
    //-------------------------------------------// easy mods
    "item.techacademy.easy_villagers.desc",
    "item.techacademy.easy_piglins.desc",
    //-------------------------------------------// blazeblock
    "item.techacademy.blazeblock.tip",
  ],
  en_us: [
    //-------------------------------------------// compact machines
    "Compact Machine - Colossal - (13x13x13) ",
    "Compact Machine - Giant - (11x11x11)",
    "Compact Machine - Large - (9x9x9)",
    "Compact Machine - Normal - (7x7x7)",
    "Compact Machine - Small - (5x5x5)",
    "Compact Machine - Soaryn - (45x45x45)",
    "Compact Machine - Farming - (21x11x21)",
    "Compact Machine - Tiny - (3x3x3)",
    //-------------------------------------------// kubejs oredic
    "Allows you to §oconvert§r an item in its §ounified version§r based on its tags",
    "§e§lUseful after updates in case of pack changes at the unification system§r",
    //-------------------------------------------// buttons
    "Continue",
    //-------------------------------------------// easy mods
    "Shift-Right Click on a villager to pick-up as item form",
    "Shift-Right Click on a piglin during you are holding something of gold to pick-up as item form",
    //-------------------------------------------// blazeblock
    "Texture will change on a future for a better version",
  ],
  it_it: [
    // to traslate (?)
    //-------------------------------------------// compact machines
    "Compact Machine - Colossal - (13x13x13) ",
    "Compact Machine - Giant - (11x11x11)",
    "Compact Machine - Large - (9x9x9)",
    "Compact Machine - Normal - (7x7x7)",
    "Compact Machine - Small - (5x5x5)",
    "Compact Machine - Soaryn - (45x45x45)",
    "Compact Machine - Farming - (21x11x21)",
    "Compact Machine - Tiny - (3x3x3)",
    //-------------------------------------------// kubejs oredic
    "Permette di §oconvertire§r un elemento nella sua versione §ounificata§r in base ai suoi tag",
    "§e§lUtile dopo gli aggiornamenti, in caso di modifiche del pacchetto nel sistema di unificazione§r",
    //-------------------------------------------// buttons
    "Continua",
    //-------------------------------------------// easy mods
    "Shift-Right Click su un villico per prenderlo in forma di item",
    "Shift-Right Click su un piglin nel mentre hai qualcosa di oro per prenderlo in forma di item",
    //-------------------------------------------// blazeblock
    "Questa texture cambierà in futuro in una versione migliore",
  ],
};

//Convert all _key traslation keys on virtual lang files to reduce multiple json
Object.keys(anyLang).forEach((entry) => {
  if (entry == "_key") return;
  ClientEvents.lang(entry, (event) => {
    anyLang._key.forEach((key, index) => {
      event.add(key, anyLang[entry][index]);
    });
  });
});