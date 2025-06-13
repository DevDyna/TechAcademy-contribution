// priority: 10

/**
 * ## Custom ExtendedAE2 function
 *
 * @param {string} fluid fluid id
 * @param {number} fluid_amount
 * @param {[{id:string,amount:number}]} items
 *
 * when id start with `#` it become an item tag
 *
 * @param {string} output type id
 * @param {number} output_amount cannot be over 64
 * @returns {object} recipe json for `event.custom()`
 */
function crystalChamber(fluid, fluid_amount, items, output, output_amount) {
  let item_inputs = [];

  items.forEach((it) => {
    item_inputs.push(
      it.id.startsWith("#")
        ? { amount: it.amount, ingredient: { tag: it.id.slice(1) } }
        : { amount: it.amount, ingredient: { item: it.id } }
    );
  });

  return {
    type: "extendedae:crystal_assembler",
    input_fluid: {
      amount: fluid_amount,
      ingredient: {
        fluid: fluid,
      },
    },
    input_items: item_inputs,
    output: {
      count: output_amount,
      id: output,
    },
  };
}