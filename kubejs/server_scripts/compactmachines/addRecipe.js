// priority: 9999998

ServerEvents.recipes((event) => {
  compactsMachines.forEach((compactMachine) => {
    let output = `compactmachines:new_machine[compactmachines:room_template="compactmachines:${compactMachine["name"]}",compactmachines:machine_color="${compactMachine["color"]}"]`
    event.shaped(
      Item.of(output, 1),
      [
        "WWW",
        "ECS",
        "WWW"
      ],
      {
        E: {item: "compactmachines:enlarging_module"},
        C: compactMachine["core"],
        S: {item: "compactmachines:shrinking_module"},
        W: {item: "compactmachines:wall"},
      }
    ).id(`kjs:compactmachines/${compactMachine["name"]}`);

  });
});

// RecipeViewerEvents.registerSubtypes("item", (event) => {
//     event.useComponents(
//       "compactmachines:new_machine",
//       ["compactmachines:room_template"]
//     );
// });

