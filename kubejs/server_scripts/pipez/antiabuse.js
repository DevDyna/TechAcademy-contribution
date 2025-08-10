ServerEvents.recipes(event => {

  event.forEachRecipe({ type: "minecraft:crafting_shaped" }, (recipe) => {
    if (recipe.getId().includes("pipez:")) {
      let recipeTxt = String(recipe.json);
      let modifiedRecipeTxt = recipeTxt.replace(/"c:ingots\/iron"/g, '"c:ingots/steel"');
      modifiedRecipeTxt = modifiedRecipeTxt.replace(/"c:nuggets\/iron"/g, '"c:nuggets/steel"');
      modifiedRecipeTxt = modifiedRecipeTxt.replace(/"item":"minecraft:flint"/g, '"tag":"c:ingots/steel"');
      event.remove({ id: recipe.getId() });
      event.custom(JSON.parse(modifiedRecipeTxt));
    }

    
  });
});