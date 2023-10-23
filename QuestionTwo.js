/**Exercise 2: Product Inventory

Given an array of product objects, each containing a name and price, 
write a program that finds the most expensive product in the array.
 */

const products = [
    {
      name: "Laptop",
      price: 899
    },
    {
      name: "Smartphone",
      price: 599
    },
    {
      name: "Headphones",
      price: 99
    },
    {
      name: "Tablet",
      price: 349
    },
    {
      name: "Smartwatch",
      price: 199
    }
  ];
  const prices=products.map((item)=>{
   return item.price
})
let maxPrice=Math.max(...prices)
console.log(maxPrice)

//  max is the accumolator and contain first element in the array  and product contain current 
//  const maxPriceProduct = products.reduce((max, product) => (product.price > max.price ? product : max), products[0]);