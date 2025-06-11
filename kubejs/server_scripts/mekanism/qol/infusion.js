ServerEvents.recipes((event) => {
  //bronze
  event.recipes.mekanism.metallurgic_infusing(
    "36x mekanism:ingot_bronze",
    "3x #immersiveengineering:blocks/copper",
    "90x mekanism:tin",
    false
  );

  //alloy
  event.recipes.mekanism.metallurgic_infusing(
    "9x mekanism:alloy_infused",
    "#immersiveengineering:blocks/copper",
    "90x mekanism:redstone",
    false
  );

  //circuit
  event.recipes.mekanism.metallurgic_infusing(
    "9x mekanism:basic_control_circuit",
    "#c:storage_blocks/osmium",
    "180x mekanism:redstone",
    false
  );

  //electrum
  event.recipes.mekanism.metallurgic_infusing(
    "9x immersiveengineering:dust_electrum",
    "gold_block",
    "90x mekanism:redstone",
    false
  );

  //create rose quartz
  event.recipes.mekanism.metallurgic_infusing(
    "4x create:rose_quartz",
    "quartz_block",
    "40x mekanism:redstone",
    false
  );

    //create rose quartz
  event.recipes.mekanism.metallurgic_infusing(
    "fluxnetworks:flux_dust",
    "#c:dusts/obsidian",
    "10x mekanism:redstone",
    false
  );
});
