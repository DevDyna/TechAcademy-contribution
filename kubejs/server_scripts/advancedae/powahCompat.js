ServerEvents.recipes((event) => {
  //2.5x efficiency (with minimal bonus)
  addReactionChamber(event, {
    itemsInput: [
      { tag: "minecraft:coals", count: 7 }, //-0.5x
      { item: "minecraft:clay_ball", count: 5 }, //2.5x
    ],
    fluidInput: { fluid: "minecraft:lava", amount: 500 }, //-1.5x
    itemsOutput: [{ id: "powah:dielectric_paste", count: 64 }], // +2.67x*
    energy: 1000,
  });
});
