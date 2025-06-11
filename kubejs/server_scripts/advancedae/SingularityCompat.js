ServerEvents.recipes((event) => {
  const INPUT = "advanced_ae:shattered_singularity";
  const OUTPUT = "advanced_ae:quantum_infused_dust";

  const { enderio, actuallyadditions } = event.recipes;

  enderio.sag_milling(OUTPUT, INPUT);
  actuallyadditions.crushing(OUTPUT, INPUT);
  event.custom(oritechCrushing("pulverizer", INPUT, [{ id: OUTPUT, count: 1 }]));
  event.custom(oritechCrushing("grinder", INPUT, [{ id: OUTPUT, count: 1 }]));
  event.custom(createMilling(INPUT, [{ id: OUTPUT }]));
});
