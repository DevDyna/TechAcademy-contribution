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

/**
 * ## Custom OriTech function
 *
 * @param {"pulverizer" | "grinder"} type oritech recipetype
 * @param {string} input_item
 *
 * when id start with `#` it become an item tag
 *
 * @param {[{count:number,id:string}]} result
 * @param {number} time default 200 -> 10s
 * @returns {object} recipe json for `event.custom()`
 */
function oritechCrushing(type, input_item, result, time) {
  return {
    type: "oritech:" + type,
    fluidInput: {
      amount: 0,
      fluid: "minecraft:empty",
    },
    fluidOutput: {
      amount: 0,
      fluid: "minecraft:empty",
    },
    ingredients: input_item.startsWith("#")
      ? [{ tag: input_item.slice(1) }]
      : [{ item: input_item }],
    results: result,
    time: typeof time == undefined ? 200 : time,
  };
}

/**
 * ## Custom Create function
 *
 * @param {string} input_item
 *
 * when id start with `#` it become an item tag
 *
 * @param {number} processing_time
 * @param {[{id:string,count?:number,chance?:number}]} result
 *
 * count and chance can be optional and can be mixed
 *
 * @returns {object} recipe json for `event.custom()`
 */
function createMilling(input_item, result, time) {
  return {
    type: "create:milling",
    ingredients: input_item.startsWith("#")
      ? [{ tag: input_item.slice(1) }]
      : [{ item: input_item }],
    processing_time: typeof time == undefined ? 200 : time,
    results: result,
  };
}
