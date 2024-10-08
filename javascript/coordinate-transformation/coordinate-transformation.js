// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  function moveCoordinatesRight2Px(x, y) {
    x = x + dx;
    y = y + dy;
    const result = [x, y];
    return result;
  }
  return moveCoordinatesRight2Px;
} 

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  function doubleScale(x, y) {
    x = x * sx;
    y = y * sy;
    const result = [x, y];
    return result;
  }
  return doubleScale;
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {

  function composedTransforms (x, y){
    let stepOne = f(x, y);
    x = stepOne[0];
    y = stepOne[1];
    let stepTwo = g(x, y);
    return stepTwo;

  }
  return composedTransforms;

}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */



export function memoizeTransform(f) {
  let actualFunction;
  let pastFunction;
  let savedMemorie;

  let memoized;

  let actX;

  actualFunction = f;

  function memoizedFunction(x,y){ 
    console.log('memoizedFunction');

    if (actX != x ) {
      memoized = f(x,y);
      savedMemorie = memoized;
      pastFunction = f;
      actX = x;
      return memoized;
    }
    else {
      return savedMemorie;
    }

  }

  if (actualFunction != pastFunction) {
    return memoizedFunction;
  }



}
