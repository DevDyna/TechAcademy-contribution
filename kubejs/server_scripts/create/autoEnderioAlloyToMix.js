ServerEvents.recipes((event) => {
  event.forEachRecipe({ type: "enderio:alloy_smelting" }, (recipe) => {
    if (
      !recipe.getId().includes("kjs:") &&
      !recipe.getId().includes("oritech:compat/")
    ) {
      let originalRecipe = JSON.parse(recipe.json);

      let result = resultHelper(originalRecipe);
      let inputs = inputHelper(originalRecipe);

      let finalrecipe = {
        type: "create:mixing",
        ingredients: [],
        results: [],
      };

      if ("neoforge:conditions" in originalRecipe) {
        finalrecipe["neoforge:conditions"] =
          originalRecipe["neoforge:conditions"];
      }

      finalrecipe["heat_requirement"] =
        originalRecipe["energy"] > 4000 ? "superheated" : "heated";

      inputs.forEach((input) => {
        for (let i = 0; i < input["count"]; i++) {
          finalrecipe["ingredients"].push(
            "tag" in input
              ? { tag: input["tag"] }
              : "children" in input && "type" in input
              ? { type: input["type"], children: input["children"] }
              : { item: input["item"] }
          );
        }
      });

      finalrecipe["results"].push({
        count: result["count"],
        item: {
          id:
            "id" in result
              ? getItemOutput(result["id"]).getId()
              : getTagOutput(result["tag"]).getId(),
        },
      });

      // esclusione brass gia presente
      if (finalrecipe["ingredients"].length <= 9) { 
        // max 9 ingredienti, la create non supporta più di 9 ingredeinti 
        // (e non supporta nenache il count sugli ingredienti)
        event.custom(finalrecipe);
      }
    }
  });
});
