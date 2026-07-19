// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return array1.reduce((acc, idx)=> (acc*10) + idx, 0) + array2.reduce((acc, idx)=> (acc*10) + idx, 0)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
function reverseNum(value){
  let res = 0;
  console.log(value)
  while (value > 0){
    let d = value % 10;
    value = Math.floor(value / 10);
    res = (res * 10) + d;
  }
  console.log(res)
  return res;
}
export function luckyNumber(value) {
  return value === reverseNum(value);
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === undefined || input === null || input === ''){
    return "Required field";
  }
  let num = Number(input);
  if (isNaN(num) || num===0){
    return "Must be a number besides 0";
  }
  return ''
}
