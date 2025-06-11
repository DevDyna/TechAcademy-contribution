ServerEvents.recipes((event) => {
  //ae2 & co circuits
  event.forEachRecipe(
    { input: "ae2:printed_silicon", type: "ae2:inscriber" },
    (recipes) => {
      let items = [];

      recipes
        .getOriginalRecipeIngredients()
        .forEach((e) => items.push({ id: e.itemIds[0], amount: 64 }));

      event
        .custom(
          reactionChamber(
            100000,
            "minecraft:water",
            250,
            items,
            "ae2:i",
            recipes.getOriginalRecipeResult().id,
            64
          )
        )
        .id(recipes.getOriginalRecipeResult().idLocation);
    }
  );
});
