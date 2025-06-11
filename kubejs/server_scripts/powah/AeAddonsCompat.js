ServerEvents.recipes((event) => {
  //powah dielectric paste

  //2.5x efficiency (with minimal bonus)
  event.custom(
    reactionChamber(
      1000,
      "minecraft:lava",
      500, //-1.5x
      [
        { id: "#minecraft:coals", amount: 7 }, //-0.5x
        { id: "minecraft:clay_ball", amount: 5 }, //2.5x
      ],
      "ae2:i",
      "powah:dielectric_paste",
      64 // +2.67x*
    )
  );

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
