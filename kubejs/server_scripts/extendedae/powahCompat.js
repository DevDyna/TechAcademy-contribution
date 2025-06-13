ServerEvents.recipes((event) => {
  event.custom(
    crystalChamber(
      "minecraft:lava",
      250,// -0.75%
      [
        { id: "#minecraft:coals", amount: 3 },
        { id: "minecraft:clay_ball", amount: 2 },
      ],
      "powah:dielectric_paste",
      24
    )
  );
});
