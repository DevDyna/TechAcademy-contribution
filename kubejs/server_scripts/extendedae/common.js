// priority: 10000000

/**
 * Adds a reaction chamber recipe to the game with specified inputs and outputs.
 *
 * @param {$RecipesKubeEvent} event - The event that triggered the script to run.
 *
 * @param {Object} crystalChamberRecipe - The reaction chamber recipe object.
 * @param {Object} crystalChamberRecipe.itemsInput - The item input for the reaction chamber recipe.
 * @param {string} crystalChamberRecipe.itemsInput[].item - The item id for the input.
 * @param {string} crystalChamberRecipe.itemsInput[].tag - The item tag for the input.
 *
 * @param {Object} crystalChamberRecipe.fluidInput - The fluid input for the reaction chamber recipe.
 * @param {string} crystalChamberRecipe.fluidInput.fluid - The fluid id for the input.
 * @param {number} crystalChamberRecipe.fluidInput.amount - The amount of fluid input.
 *
 * @param {Array} crystalChamberRecipe.itemsOutput - The list of item outputs for the reaction chamber recipe.
 * @param {string} crystalChamberRecipe.itemsOutput[].id - The item id for the output.
 * @param {number} crystalChamberRecipe.itemsOutput[].count - The count of the item output.
 *
 * @param {number} crystalChamberRecipe.energy - The processing time for the reaction chamber recipe in ticks.
 * 
 * @return {$KubeRecipe} The reaction chamber recipe.
 * 
 */
function addCrystalChamber(event, crystalChamberRecipe) {
  let itemsInput = "itemsInput" in crystalChamberRecipe ? crystalChamberRecipe.itemsInput : [];
  let itemsOutput = "itemsOutput" in crystalChamberRecipe ? crystalChamberRecipe.itemsOutput : [];
  let fluidInput = "fluidInput" in crystalChamberRecipe ? crystalChamberRecipe.fluidInput : { fluid: "minecraft:empty", amount: 0 };
  let conditions = "conditions" in crystalChamberRecipe ? crystalChamberRecipe.conditions : [];

  let baseRecipe = {
    "neoforge:conditions": [],
    type: "extendedae:crystal_assembler",
    input_fluid: {
      amount: 100,
      ingredient: {
        fluid: "minecraft:water",
      },
    },
    input_items: [
      // {
      //   amount: 4,
      //   ingredient: {
      //     item: "ae2:charged_certus_quartz_crystal",
      //   },
      // },
    ],
    output: {
      count: 1,
      id: "minecraft:dirt",
    },
  };

  if (!fluidInput["fluid"].includes("minecraft:empty")) {
    baseRecipe["input_fluid"] = {
      amount: fluidInput["amount"],
      ingredient: {
        fluid: fluidInput["fluid"],
      },
    };
  }

  itemsInput.forEach((item) => {
    if ("item" in item) {
      baseRecipe["input_items"].push({
        amount: item["count"],
        ingredient: {
          item: item["item"],
        },
      });
    } else {
      baseRecipe["input_items"].push({
        amount: item["count"],
        ingredient: {
          tag: item["tag"],
        },
      });
    }
  });

  baseRecipe["output"] = {
    count: itemsOutput[0]["count"],
    id: itemsOutput[0]["id"],
  };

  conditions.forEach((item) => {
    baseRecipe["neoforge:conditions"].push(item);
  });

  return event.custom(baseRecipe);
}
