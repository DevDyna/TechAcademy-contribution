// priority: 10

/**
 * ## Custom Create function
 * include Crushing wheel and Millstone!
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
