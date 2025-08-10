ServerEvents.recipes(event => {

  event.forEachRecipe({ type: "minecraft:crafting_shapeless" }, (recipe) => {
    if (recipe.getId().includes("placers:") && !recipe.getId().includes("placers:immersive_engineering/controller")) {
      event.remove({ id: recipe.getId() });
    }
  });
});