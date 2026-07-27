// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let cnt = 0;
  stack.forEach((num)=> num===card && cnt++)
  return cnt;
  // 🚨 Use .forEach
  throw new Error('Implement the cardTypeCheck function');
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let evenCnt = 0;
  let oddCnt = 0;
  for (let num of stack){
    if (num%2){
      oddCnt++;
    }
    else{
      evenCnt++;
    }
  }
  return type ? evenCnt : oddCnt;
  // 🚨 Use a `for...of` loop
  throw new Error('Implement the determineOddEvenCards function');
}
