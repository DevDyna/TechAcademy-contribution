// priority: 10

/**
 * ## Custom AdvancedAE2 function
 *
 * @param {number} energy total energy used foreach recipe
 * @param {string} fluid fluid id
 * @param {number} fluid_amount
 * @param {[{id:string,amount:number}]} items
 *
 * when id start with `#` it become an item tag
 *
 * @param {string} output_type
 *
 * `ae2:i` -> item
 *
 * `ae2:f` -> fluid?
 *
 * ?? -> ?? (need more info)
 *
 * @param {string} output type id
 * @param {number} output_amount cannot be over 64
 * @returns {object} recipe json for `event.custom()`
 */
function reactionChamber(
  energy,
  fluid,
  fluid_amount,
  items,
  output_type,
  output,
  output_amount
) {
  let item_inputs = [];

  items.forEach((it) => {
    item_inputs.push(
      it.id.startsWith("#")
        ? { amount: it.amount, ingredient: { tag: it.id.slice(1) } }
        : { amount: it.amount, ingredient: { item: it.id } }
    );
  });

  return {
    type: "advanced_ae:reaction",
    input_energy: energy,
    input_fluid: {
      amount: fluid_amount,
      ingredient: {
        fluid: fluid,
      },
    },
    input_items: item_inputs,
    output: {
      "#": output_amount,
      "#t": output_type,
      id: output,
    },
  };
}