/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family',
  knowsProgramming = true,
  config = {
    family: 4
  }) {
  let educationTime = 1300;
  let weeks = 0;

  if (knowsProgramming) {
    educationTime -= 500;
  }
  for (i = 1; i <= educationTime; i += config[focus]) {
    weeks++;
  }

  return weeks;
};