ServerEvents.recipes((event) => {
  addCrystalChamber(event, {
    itemsInput: [
      { tag: "minecraft:coals", count: 3 },
      { item: "minecraft:clay_ball", count: 2 },
    ],
    fluidInput: { fluid: "minecraft:lava", amount: 250 }, // -0.75%
    itemsOutput: [{ id: "powah:dielectric_paste", count: 24 }],
  });
});
