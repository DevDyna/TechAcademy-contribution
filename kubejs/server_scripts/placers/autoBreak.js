BlockEvents.rightClicked((event) => {
  const {
    player,
    hand,
    block,
    level,
    server,
    facing,
  } = event;

  if (hand == "off_hand") return;
  if (String(facing).includes("up")) return;
  if (String(facing).includes("down")) return;
  if (!player.mainHandItem.id.includes("_placer")) return;
  if (!String(block.id).includes("placers:")) return;

  let posBeh = getBehindPos(invertDirection(facing), block.getPos());

  server.scheduleInTicks(timeToTicks(0.3, "seconds"), () => {
    let testBlockIds = [
      "minecraft:cauldron",
      "minecraft:piston",
      "immersiveengineering:",
    ];
    let blockBehind = level.getBlock(
      posBeh.getX(),
      posBeh.getY(),
      posBeh.getZ()
    ).id;
    let blockBehindUp = level.getBlock(
      posBeh.getX(),
      posBeh.getY() + 1,
      posBeh.getZ()
    ).id;
    if (
      testBlockIds.some((testBlockId) =>
        String(blockBehind).includes(testBlockId)
      ) ||
      testBlockIds.some((testBlockId) =>
        String(blockBehindUp).includes(testBlockId)
      )
    ) {
      block.set("minecraft:air");
      level.spawnParticles(
        'minecraft:block{block_state:{Name:"placers:immersive_multiblock_controller"}}',
        false,
        block.getPos().getX() + 0.5,
        block.getPos().getY() + 0.5,
        block.getPos().getZ() + 0.5,
        0,
        0,
        0,
        50,
        1
      );
      // kubejs command not working
      player.runCommandSilent(
        `playsound minecraft:block.nether_bricks.break block @s ${block
          .getPos()
          .getX()} ${block.getPos().getY()} ${block.getPos().getZ()} 100 1 1`
      );
      player.give("placers:immersive_multiblock_controller");
    }
  });
});
