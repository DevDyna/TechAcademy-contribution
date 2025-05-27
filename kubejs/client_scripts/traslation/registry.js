//ONLY registry ids registred with kubejs

const Registryids = {
  items: [
    "techacademy:ore_dictionary",
    "techacademy:tech_token",
    "techacademy:blazerod_block",
  ],
  //unused default display name
  //   en_us: [
  //     "Ore Dictionary",
  //     "Tech Token",
  //     "BlazeRod Block"
  // ],
  it_it: [
    //TODO
    "Ore Dictionary",
    "Tech Token",
    "Blocco di BlazeRod",
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
