const powah_datamap = {
  inputs: [
    ["#c:storage_blocks/iron", "#c:storage_blocks/gold"],
    ["techacademy:blazerod_block"],
    ["#c:storage_blocks/nickel", "#c:storage_blocks/fluxite"],
    ["#c:storage_blocks/uranium"],
    ["minecraft:snow_block"],
    ["#c:storage_blocks/diamond"],
    ["#c:storage_blocks/emerald"],
  ],
  output: [
    "powah:energized_steel_block",
    "powah:blazing_crystal_block",
    "oritech:energite_block",
    "powah:uraninite_block",
    "4x powah:charged_snowball",
    "powah:niotic_crystal_block",
    "powah:spirited_crystal_block",
  ],
  energy: [90000, 1080000, 180000, 270000, 4500000, 2700000, 9000000],
};

ServerEvents.recipes((event) => {

  event.shapeless("9x minecraft:blaze_rod", ["techacademy:blazerod_block"]);
  event.shaped(
      Item.of("techacademy:blazerod_block", 1),
      [
        "BBB",
        "BBB",
        "BBB",
      ],
      {
        B: {item: "minecraft:blaze_rod"}
      }
    )

  powah_datamap.energy.forEach((energy, index) => {
    event.recipes.powah.energizing(
      powah_datamap.inputs[index],
      powah_datamap.output[index],
      energy
    );
  });
});
