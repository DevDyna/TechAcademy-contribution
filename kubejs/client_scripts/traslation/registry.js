//ONLY registry ids registred with kubejs

const Registryids = {
  items: [
    "techacademy:ore_dictionary",
    "techacademy:tech_token",
    "techacademy:blazerod_block",
  ],
    en_us: [
      "Ore Dictionary",
      "Tech Token",
      "Blazerod Block"
  ],
  it_it: [
    "Dizionario degli Ore",
    "Tech Token",
    "Blocco di Verghe di Blaze",
  ],
};

Object.keys(Registryids).forEach((entry) => {
  if (entry == "items") return;
  ClientEvents.lang(entry, (event) => {
    Registryids.items.forEach((item, index) => {
      event.renameItem(item, Registryids[entry][index]);
    });
  });
});
