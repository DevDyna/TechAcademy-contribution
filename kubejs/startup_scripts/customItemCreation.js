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
    .displayName("Blazerod Block")
    .soundType("ANCIENT_DEBRIS")
    .hardness(50) // like obsidian
    .resistance(1200) // like obsidian
    .texture(Direction.DOWN, "techacademy:block/blazerod_block_top")
    .texture(Direction.UP, "techacademy:block/blazerod_block_top")
    .texture(Direction.NORTH, "techacademy:block/blazerod_block")
    .texture(Direction.SOUTH, "techacademy:block/blazerod_block")
    .texture(Direction.WEST, "techacademy:block/blazerod_block")
    .texture(Direction.EAST, "techacademy:block/blazerod_block")
    .texture("particle", "techacademy:block/blazerod_block")
    .tagBlock("c:storage_blocks/blaze")
    .item((i) => i.tooltip(keyname("item.techacademy.newblock.tip")));
});
