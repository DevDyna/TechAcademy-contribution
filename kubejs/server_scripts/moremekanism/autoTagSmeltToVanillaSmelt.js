ServerEvents.recipes((event) => {
  event.forEachRecipe(
    { type: "moremekanismprocessing:tag_smelting" },
    (recipe) => {
      let newrecipe = JSON.parse(recipe.json);

      event.remove({ id: recipe.getId() });
      // console.error(`${recipe.getId()}`)
      // event
      //   .smelting(newrecipe["result"], newrecipe["ingredient"])
      //   .xp(newrecipe["experience"])
      //   .cookingTime(newrecipe["cookingtime"]);

      let output =
        "item" in newrecipe["result"]
          ? getItemOutput(newrecipe["result"]["item"])
          : getTagOutput(newrecipe["result"]["tag"]);
      let outputCount = newrecipe["result"]["count"]
        ? newrecipe["result"]["count"]
        : 1;
      let input =
        "item" in newrecipe["ingredient"]
          ? newrecipe["ingredient"]["item"]
          : `#${newrecipe["ingredient"]["tag"]}`;
      
      event
        .smelting(
          output.withCount(outputCount),
          input
        )
        .xp(newrecipe["experience"])
        .cookingTime(newrecipe["cookingtime"]);
    }
  );
});
