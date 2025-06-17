ServerEvents.recipes((event) => {
  event.forEachRecipe({ type: "immersiveengineering:alloy" }, (recipe) => {
    if (
      !recipe.getId().includes("kjs:") &&
      !recipe.getId().includes("oritech:compat/")
    ) {

      let newrecipe = JSON.parse(recipe.json);

      let result = immersiveOutputHelper(newrecipe);
      let inputs = immersiveInputHelper(newrecipe);

      let finalrecipe = {
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [],
        results: [],
      };

      if ("neoforge:conditions" in newrecipe) {
        finalrecipe["neoforge:conditions"] = newrecipe["neoforge:conditions"];
      }

      inputs.forEach((input) => {
        for (let i = 0; i < input["count"]; i++) {
          finalrecipe["ingredients"].push(
            "tag" in input ? { tag: input["tag"] } : { item: input["item"] }
          );
        }
      });

      finalrecipe["results"].push({
        count: result["count"],
        item: {
          id:
            "item" in result
              ? result["item"]
              : AlmostUnified.getTagTargetItem(result["tag"]).id,
        },
      });

      // esclusione brass gia presente
      if (finalrecipe["results"][0]["item"]["id"].includes("brass") !== true) {
        event.custom(finalrecipe);
      }
    }
  });
});
