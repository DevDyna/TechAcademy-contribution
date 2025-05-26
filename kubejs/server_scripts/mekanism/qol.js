const MOD_BASE_RL = "techacademy:";

const BIOFUEL = "mekanism:bio_fuel";
const BIOFUELBLOCK = "mekanism:block_bio_fuel";


/**
 * # Bio fuel Unifier
 *  it unify any mekanism biofuel recipes to allow to use
 * "#fuel #<number-biofuel-output>" to search all items without need to search one by one
 *  
 * Feature ispired from Enigmatica 6 (recreated from scratch)
 * */



//Many items dont match oritech unification count!
ServerEvents.tags("item", (event) => {
  event.add(MOD_BASE_RL + "biofuel/block/one", ["dried_kelp_block"]);
  event.add(MOD_BASE_RL + "biofuel/block/two", [
    "hay_block",
    "nether_wart_block",
  ]);

  event.add(MOD_BASE_RL + "biofuel/item/one", [
    "minecraft:pink_petals",
    "minecraft:melon_slice",
    "minecraft:pink_petals",
    "minecraft:glow_lichen",
    "minecraft:nether_sprouts",
    "minecraft:small_dripleaf",
    "minecraft:rotten_flesh",
    "minecraft:lily_pad",
    "minecraft:crimson_roots",
    "minecraft:dried_kelp",
    "minecraft:sugar_cane",
    "minecraft:hanging_roots",
    "minecraft:warped_roots",
    "minecraft:sea_pickle",
    "minecraft:pitcher_pod",
    "minecraft:short_grass",
    "minecraft:seagrass",
    "minecraft:mangrove_roots",
    "#c:seeds",
    "#minecraft:small_flowers",
    "#minecraft:saplings",
    "#c:mushrooms",
    "#c:foods/berries",
    "minecraft:vine",
    "minecraft:twisting_vines",
    "minecraft:weeping_vines",
    "minecraft:crimson_fungus",
    "minecraft:warped_fungus",
  ]);
  event.add(MOD_BASE_RL + "biofuel/item/two", [
    "minecraft:tall_grass",
    "minecraft:moss_block",
    "minecraft:baked_potato",
    "#minecraft:tall_flowers",
    "minecraft:big_dripleaf",
    "minecraft:spore_blossom",
    "minecraft:kelp",
    "minecraft:bamboo",
    "minecraft:carved_pumpkin",
    "minecraft:poisonous_potato",
    "minecraft:fern",
    "minecraft:carrot",
    "minecraft:cactus",
    "minecraft:cocoa_beans",
    "minecraft:nether_wart",
    "minecraft:beetroot",
    "minecraft:wheat",
    "minecraft:potato",
    "minecraft:apple",
  ]);
  event.add(MOD_BASE_RL + "biofuel/item/three", ["minecraft:large_fern"]);
  event.add(MOD_BASE_RL + "biofuel/item/four", [
    "minecraft:warped_wart_block",
    "minecraft:bread",
    "minecraft:shroomlight",
    "minecraft:brown_mushroom_block",
    "minecraft:red_mushroom_block",
    "minecraft:mushroom_stem",
  ]);

  event.add(MOD_BASE_RL + "biofuel/item/six", [
    "#c:crops/pumpkin",
    "minecraft:cake",
    "minecraft:melon",
  ]);
  event.add(MOD_BASE_RL + "biofuel/item/seven", ["minecraft:pumpkin_pie"]);
});

ServerEvents.recipes((event) => {
  event.remove([{ type: "mekanism:crushing", output: BIOFUEL },{ type: "mekanism:crushing", output: BIOFUELBLOCK }]);

  const { crushing } = event.recipes.mekanism;

  //unique ratio
  crushing(BIOFUEL, "10x #minecraft:leaves");
  crushing("3x " + BIOFUEL, "4x minecraft:cookie");
  crushing("4x " + BIOFUEL, "3x minecraft:moss_carpet");

  //biofuel blocks generation
  crushing(BIOFUELBLOCK, "#" + MOD_BASE_RL + "biofuel/block/one");
  crushing("2x " + BIOFUELBLOCK, "#" + MOD_BASE_RL + "biofuel/block/two");

  //biofuel items generation
  crushing(BIOFUEL, "#" + MOD_BASE_RL + "biofuel/item/one");
  crushing("2x " + BIOFUEL, "#" + MOD_BASE_RL + "biofuel/item/two");
  crushing("3x " + BIOFUEL, "#" + MOD_BASE_RL + "biofuel/item/three");
  crushing("4x " + BIOFUEL, "#" + MOD_BASE_RL + "biofuel/item/four");

  crushing("6x " + BIOFUEL, "#" + MOD_BASE_RL + "biofuel/item/six");
  crushing("7x " + BIOFUEL, "#" + MOD_BASE_RL + "biofuel/item/seven");
});
