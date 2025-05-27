/**
 * @param {string} key
 * @returns traslation key
 */
const keyname = (key) => Component.translatable(key);

//registry ids are required on /client_scripts/registry.js
StartupEvents.registry("item", (event) => {
  //kubejs auto-generate display names based on registry ids
  event.create("techacademy:tech_token").displayName("Tech Token");
  event
    .create("techacademy:ore_dictionary")
    .displayName("Ore Dictionary")
    .maxStackSize(1)
    .tooltip(keyname("item.techacademy.ore_dictionary.tooltip1"))
    .tooltip(keyname("item.techacademy.ore_dictionary.tooltip2"));
});

StartupEvents.registry("block", (event) => {
  event
    .create("techacademy:blazerod_block")
    .displayName("BlazeRod Block")
    .item((i) => i.tooltip(keyname("item.techacademy.blazeblock.tip")));
});
