const moreburners_dir = "moreburners:recipe/";
//it *should* work but wasn't tested yet
ServerEvents.generateData("after_mods", (event) => {
  event.json(moreburners_dir + "ember_burner", {
    "neoforge:conditions": [
      {
        type: "neoforge:not",
        value: {
          type: "neoforge:tag_empty",
          tag: "c:plates/dawnstone",
        },
      },
    ],
    type: "minecraft:crafting_shaped",
    key: {
      B: {
        item: "embers:mechanical_core",
      },
      C: {
        item: "create:empty_blaze_burner",
      },
      I: {
        tag: "c:ingots/iron",
      },
      P: {
        tag: "c:plates/dawnstone",
      },
    },
    pattern: ["PPP", "ICI", " B "],
    result: {
      id: "moreburners:ember_burner",
    },
  });
});
