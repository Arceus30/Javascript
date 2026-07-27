/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  if (!extras.length){
    if (pizza === 'Margherita'){
      return 7;
    }
    if (pizza === 'Caprese'){
      return 9;
    }
    if (pizza === 'Formaggio'){
      return 10;
    }
    return 0;
  }
  const price = pizzaPrice(pizza, ...extras.slice(1));
  return extras[0]==='ExtraToppings' ? price + 2 : price + 1;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let totalPrice = 0;
  for (let order of pizzaOrders){
    totalPrice = totalPrice + pizzaPrice(order.pizza, ...order.extras);
  }
  console.log(totalPrice)
  return totalPrice;
}
