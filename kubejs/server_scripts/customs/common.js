//database of all time operations
const timeTab = {
  seconds: 20,
  minutes: 20 * 60,
  hours: 20 * 60 * 60,
  days: 20 * 60 * 60 * 24,
  weeks: 20 * 60 * 60 * 24 * 7,
  months: 20 * 60 * 60 * 24 * 30,
  years: 20 * 60 * 60 * 24 * 365,
};

/**
 * Converts a given number of ticks into a specified time unit.
 *
 * @param {number} ticks - The number of ticks to be converted.
 * @param {string} outputTimeType - The desired time unit for conversion.
 *        Can be one of the following: "seconds", "minutes", "hours", "days",
 *        "weeks", "months", "years". If not specified or unrecognized,
 *        returns the input ticks value.
 * @returns {number} - The equivalent time in the specified unit, or the
 *          original ticks if the unit is unrecognized.
 */
function ticksToTime(ticks, outputTimeType) {
  return ticks / (timeTab[outputTimeType] || 1);
}

/**
 * Converts a given amount of time into ticks.
 *
 * @param {number} time - The amount of time to be converted.
 * @param {string} inputTimeType - The time unit of the input time. Can be one of the following: "seconds", "minutes", "hours", "days", "weeks", "months", "years". If not specified or unrecognized, returns the input time value.
 * @returns {number} - The equivalent time in ticks, or the original time if the unit is unrecognized.
 */
function timeToTicks(time, inputTimeType) {
  return Math.ceil(time * (timeTab[inputTimeType] || 1));
}

const inverseDirection = {
  "north": "south",
  "south": "north",
  "west": "east",
  "east": "west",
  "down": "up",
  "up": "down"
}

/**
 * Returns the inverse direction of a given direction string, or the original
 * direction if it is not recognized.
 *
 * @param {string} direction - The direction string to be inverted. Can be one
 *        of the following: "north", "south", "west", "east", "up", "down". If
 *        not specified or unrecognized, the original direction is returned.
 * @returns {string} - The inverse direction string, or the original direction
 *          if it is not recognized.
 */
function invertDirection(direction) {
  return inverseDirection[direction] || direction;
}

const behindSchema = {
  "north": [0, 0, -1],
  "south": [0, 0, 1],
  "west": [-1, 0, 0],
  "east": [1, 0, 0],
  "down": [0, -1, 0],
  "up": [0, 1, 0]
}


/**
 * Calculates the position behind a given position based on the specified direction.
 *
 * This function uses a predefined schema to determine the offset for each
 * direction. If the direction is recognized, it adds the corresponding offset
 * to the provided position. If the direction is not recognized, it returns
 * the original position.
 *
 * @param {string} direction - The direction string indicating the desired
 *        direction for which to get the position behind. Valid directions
 *        include: "north", "south", "west", "east", "up", "down".
 * @param {BlockPos} pos - The current position value.
 * @returns {BlockPos} - The position value behind the given position based on
 *          the specified direction, or the original position if the direction
 *          is not recognized.
 */
function getBehindPos(direction, pos) {
  return BlockPos(pos.getX() + behindSchema[direction][0], pos.getY() + behindSchema[direction][1], pos.getZ() + behindSchema[direction][2]) || pos;
}