ServerEvents.recipes((event) => {
  const { metallurgic_infusing } = event.recipes.mekanism;
  //bronze
  metallurgic_infusing(
    "36x mekanism:ingot_bronze",
    "3x #c:storage_blocks/copper",
    "90x mekanism:tin",
    false
  );

  //alloy
  metallurgic_infusing(
    "9x mekanism:alloy_infused",
    "#c:storage_blocks/copper",
    "90x mekanism:redstone",
    false
  );

  //circuit
  metallurgic_infusing(
    "9x mekanism:basic_control_circuit",
    "#c:storage_blocks/osmium",
    "180x mekanism:redstone",
    false
  );

  //electrum
  metallurgic_infusing(
    "9x immersiveengineering:dust_electrum",
    "#c:storage_blocks/gold",
    "90x mekanism:redstone",
    false
  );

  //create rose quartz
  metallurgic_infusing(
    "4x create:rose_quartz",
    "#c:storage_blocks/quartz",
    "40x mekanism:redstone",
    false
  );

    //create rose quartz
  metallurgic_infusing(
    "fluxnetworks:flux_dust",
    "#c:dusts/obsidian",
    "10x mekanism:redstone",
    false
  );
});
