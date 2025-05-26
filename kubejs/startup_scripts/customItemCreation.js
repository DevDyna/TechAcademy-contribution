StartupEvents.registry("item", (event) => {
  //kubejs/assets/kubejs/textures/item/tech_token.png
  event.create("techacademy:tech_token").displayName("Tech Token");
  event
    .create("techacademy:ore_dictionary")
    .displayName("Ore Dictionary")
    .maxStackSize(1)
    .tooltip({ translate: "item.techacademy.ore_dictionary.tooltip1" })
    .tooltip({ translate: "item.techacademy.ore_dictionary.tooltip2" });
});

StartupEvents.registry("block", (event) => {
  event.create("techacademy:blazerod_block").item(i=>{
    i.tooltip({ translate: "item.techacademy.blazeblock.tip" })
  })
});
