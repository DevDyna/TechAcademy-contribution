//ONLY registry ids registred with kubejs
const registryLangs = [
  "en_us",
  "it_it"
];

const registryStrings ={
  "techacademy:ore_dictionary": [
    "Ore Dictionary",
    "Dizionario degli Ore",
  ],
  "techacademy:tech_token": [
    "Tech Token",
    "Tech Token",
  ],
  "techacademy:blazerod_block": [
    "Blazerod Block",
    "Blocco di Verghe di Blaze",
  ],
}

guiLangs.forEach((lang, langIndex) => {
  ClientEvents.lang(lang, (event) => {
    let text;
    Object.keys(registryStrings).forEach((entry) => {
      if (typeof registryStrings[entry][langIndex] === "")
        text = "MISSING TRANSLATION";
      else
        text = registryStrings[entry][langIndex];
      event.renameItem(entry, text);
    });
  });
})

