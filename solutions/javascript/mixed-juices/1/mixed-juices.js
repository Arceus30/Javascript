// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name.toLowerCase()){
    case 'pure strawberry joy':
      return 0.5;      
    case 'energizer':
    case 'green garden':
      return 1.5;
    case 'tropical island':
      return 3;
    case 'all or nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if (!wedgesNeeded){
    return 0;
  }
  let i = 0;
  let wedgeCnt = 0;
  while (i < limes.length){
    switch(limes[i].toLowerCase()){
      case 'small':
        wedgeCnt+=6;
        break;
      case 'medium':
        wedgeCnt+=8;
        break;
      case 'large':
        wedgeCnt+=10;
        break;
      default:
        wedgeCnt+=0;        
    }
    if (wedgeCnt >= wedgesNeeded){
      return i+1;
    }
    i++;
  }
  return limes.length;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  console.log(timeLeft, orders)
  let i = 0;
  while (i < orders.length){
    timeLeft -= timeToMixJuice(orders[i]);
    if (timeLeft<=0){
      break;
    }
    i++;
  }
  let newArr = orders.slice(i+1);
  console.log(newArr)
  return newArr;
}
