ServerEvents.recipes((event) => {
  //ae2 & co circuits
  event.forEachRecipe(
    { input: "ae2:printed_silicon", type: "ae2:inscriber" },
    (recipes) => {
      let items = [];

      recipes.getOriginalRecipeIngredients().forEach((e) => {
        items.push({ item: e.itemIds[0], count: 64 });
      });

      addReactionChamber(event, {
        itemsInput: items,
        fluidInput: { fluid: "minecraft:water", amount: 250 },
        itemsOutput: [{ id: recipes.getOriginalRecipeResult().id, count: 64 }],
        energy: 100000,
      });
    }
  );
});
