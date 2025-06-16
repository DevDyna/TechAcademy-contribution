// priority: 10000000

/**
 * Adds a reaction chamber recipe to the game with specified inputs and outputs.
 *
 * @param {$RecipesKubeEvent} event - The event that triggered the script to run.
 *
 * @param {Object} reactionChamberRecipe - The reaction chamber recipe object.
 * @param {Object} reactionChamberRecipe.itemsInput - The item input for the reaction chamber recipe.
 * @param {string} reactionChamberRecipe.itemsInput[].item - The item id for the input.
 * @param {string} reactionChamberRecipe.itemsInput[].tag - The item tag for the input.
 *
 * @param {Object} reactionChamberRecipe.fluidInput - The fluid input for the reaction chamber recipe.
 * @param {string} reactionChamberRecipe.fluidInput.fluid - The fluid id for the input.
 * @param {number} reactionChamberRecipe.fluidInput.amount - The amount of fluid input.
 *
 * @param {Array} reactionChamberRecipe.itemsOutput - The list of item outputs for the reaction chamber recipe.
 * @param {string} reactionChamberRecipe.itemsOutput[].id - The item id for the output.
 * @param {number} reactionChamberRecipe.itemsOutput[].count - The count of the item output.
 *
 * @param {Object} reactionChamberRecipe.fluidOutput - The fluid output for the reaction chamber recipe.
 * @param {string} reactionChamberRecipe.fluidOutput.fluid - The fluid id for the output.
 * @param {number} reactionChamberRecipe.fluidOutput.amount - The amount of fluid output.
 *
 * @param {number} reactionChamberRecipe.energy - The processing time for the reaction chamber recipe in ticks.
 * 
 * @return {$KubeRecipe} The reaction chamber recipe.
 * 
 */
function addReactionChamber(event, reactionChamberRecipe) {
  let itemsInput = "itemsInput" in reactionChamberRecipe ? reactionChamberRecipe.itemsInput : [];
  let itemsOutput = "itemsOutput" in reactionChamberRecipe ? reactionChamberRecipe.itemsOutput : [];
  let fluidInput = "fluidInput" in reactionChamberRecipe ? reactionChamberRecipe.fluidInput : { fluid: "minecraft:empty", amount: 0 };
  let fluidOutput = "fluidOutput" in reactionChamberRecipe ? reactionChamberRecipe.fluidOutput : { fluid: "minecraft:empty", amount: 0 };
  let energy = "energy" in reactionChamberRecipe ? reactionChamberRecipe.energy : 256;
  let conditions = "conditions" in reactionChamberRecipe ? reactionChamberRecipe.conditions : [];

  let baseRecipe = {
    "neoforge:conditions": [],
    type: "advanced_ae:reaction",
    input_energy: 0,
    input_fluid: {
      amount: 100,
      ingredient: {
        fluid: "minecraft:water",
      },
    },
    input_items: [],
    output: {
      "#": 1,
      "#t": "ae2:i",
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

  if (!fluidOutput["fluid"].includes("minecraft:empty")) {
    baseRecipe["output"] = {
      "#": fluidOutput["amount"],
      "#t": "ae2:f",
      id: fluidOutput["fluid"],
    };
  } else {
    baseRecipe["output"] = {
      "#": itemsOutput[0]["count"],
      "#t": "ae2:i",
      id: itemsOutput[0]["id"],
    };
  }

  conditions.forEach((item) => {
    baseRecipe["neoforge:conditions"].push(item);
  });

  baseRecipe["input_energy"] = energy;

  return event.custom(baseRecipe);
}
