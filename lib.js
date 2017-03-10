'use strict'
/*
use name to determine which price to use
*/
const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items // array of strings
  })

const listedPrice = // use this
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0 //a way to map every single listing with every single name
        // use to create a reduction function

const transformItem = (itemx, listings) =>
{
    const arr = listings.map((x) => {if (x.name === itemx){return x.price}else{return 0}})

    const arr2 = arr.reduce((sum, x) => {return sum + x},0)

    return arr2
}
/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals = //take these carts, create an array of customers and totals
  listings =>
    carts => {
      let arr3 = carts
      const arr4 = arr3.map((cartx) => cartx.items.reduce( (sum, itemsx) => {return sum + transformItem(itemsx, listings)},0))

      let arr5 = []

      for (let i = 0; i < arr4.length; i++)
      {
        arr5[i] = {customer: carts[i].customer, total: arr4[i]}
      }

      //console.log(arr5)
      return arr5
  }

module.exports = {
  listing,
  cart,
  calculateTotals
}
