/**Exercise 6: Online Shop

Create an array of product objects, each including a name, price, and quantity in stock. 
Write a program that calculates the total value of the inventory by multiplying the price and
 quantity for each product and then summing up these values.
 */
 const products = [
    { name: 'Product 1', price: 19.99, quantity: 50 },
    { name: 'Product 2', price: 29.99, quantity: 30 },
    { name: 'Product 3', price: 14.95, quantity: 25 },
    { name: 'Product 4', price: 9.99, quantity: 100 },
    { name: 'Product 5', price: 49.99, quantity: 10 },
    { name: 'Product 6', price: 39.99, quantity: 20 },
    { name: 'Product 7', price: 24.99, quantity: 40 },
    { name: 'Product 8', price: 7.99, quantity: 75 },
    { name: 'Product 9', price: 17.50, quantity: 60 },
    { name: 'Product 10', price: 59.95, quantity: 15 }
  ];
  let sum=0; 
products.forEach((p)=>{
   
sum+=p.price*p.quantity

})
console.log('Total Price of inventory',sum)

  