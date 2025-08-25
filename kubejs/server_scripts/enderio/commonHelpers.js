/**
 * Extracts input information from a recipe object and returns an array of input resources.
 *
 * The function returns the "inputs" property of the recipe object, which is an array of objects.
 * Each object in the array contains information about a single input resource, including its count
 * and either its tag or item identifier.
 *
 * @param {Object} recipe - The recipe object containing input details.
 * @returns {Array<Object>} An array of input resource objects, each with a count and either a tag or item property.
 */
function inputHelper(recipe) {
  return recipe["inputs"];
}

/**
 * Extracts output information from a recipe object and returns the output resource.
 *
 * The function returns the "output" property of the recipe object, which is an object containing
 * information about the output resource, including its count and either its tag or item identifier.
 *
 * @param {Object} recipe - The recipe object containing output details.
 * @returns {Object} The output resource object, with a count and either a tag or item property.
 */
function resultHelper(recipe) {
  return recipe["output"];
}