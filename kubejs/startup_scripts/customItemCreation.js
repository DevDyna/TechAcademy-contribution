StartupEvents.registry("item", (event) => {
  //kubejs auto-generate display names based on registry ids
  event.create("techacademy:tech_token")
  //.displayName("Tech Token");
  event.create("techacademy:ore_dictionary")
    // .displayName("Ore Dictionary")
    .maxStackSize(1)
    .tooltip(Component.translatable("item.techacademy.ore_dictionary.tooltip1"))
    .tooltip(
      Component.translatable("item.techacademy.ore_dictionary.tooltip2")
    );
});

StartupEvents.registry("block", (event) => {
  event.create("techacademy:blazerod_block").item((i) => {
    i.tooltip(
      Component.translatable("item.techacademy.blazeblock.tip")
    )
  });
});
