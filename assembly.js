// these are some resources you need to make a taco. The ingredients are all in a fridge array.
let fridge = [
  "tomato",
  "lettuce",
  "salsa",
  "sour cream",
  "cheddar",
  "mozzarella",
  "chicken",
  "steak",
  "haddock",
  "cilantro",
  "lime",
  "pickled turnip",
  "cabbage",
];
// and the recipes are in another array
let recipes = {
  "Classic taco": {
    ingredients: [
      "taco",
      "tomato",
      "lettuce",
      "salsa",
      "sour cream",
      "cheddar",
      "chicken",
    ],
  },
  "Highland taco": {
    ingredients: ["taco", "salsa", "sour cream", "cheddar", "steak"],
  },
  "Sea taco": {
    ingredients: [
      "taco",
      "salsa",
      "mozzarella",
      "cilantro",
      "lime",
      "picked turnip",
      "cabbage",
      "haddock",
    ],
  },
};

// We'll have a bunch of customers coming in shortly, but first we have to prepare for the day.
// There is a vital ingredient currently missing from our fridge: the taco itself.
// let's go to the store and see if they have any in-stock.
let storeInventory = {
  tomato: 5,
  lettuce: 10,
  taco: 3,
  cheddar: 0,
  salsa: 2,
  "sour cream": 0,
};
// 1. write a conditional statement and check if any tacos are available in the store.
// if there are at-least 1 of that item, print 'Buying taco...'
if (storeInventory.taco) {
  console.log("Buying taco...");
}

// 2. then add the string 'taco' to the fridge array
fridge.push("taco");

// ok, a bunch of customers have just walked in. Each one has a list of tacos they ordered...
let customers = [
  {
    name: "Andre",
    order: ["Classic Taco", "Classic Taco"],
  },
  {
    name: "Josh",
    order: ["Highland Taco", "Classic Taco"],
  },
  {
    name: "Yash",
    order: ["Classic Taco", "Sea Taco"],
  },
];

// Let's start making them and serving our guests!
// 3. create an empty array called 'orders'
const orders = [];

// 4. We're going to serve one customer at a time. What is the name of the first customer?
// Print out, "Now serving {customer name here}"
const firstCustomer = 0;
console.log(`Now serving ${customers[firstCustomer].name}`);

// 5. How many tacos did they order? Print out, "they ordered {number of tacos} tacos"
console.log(`they ordered ${customers[firstCustomer].order.length} tacos`);

// 6. Add all the names of the tacos in their order to the 'orders' array from step 3.
for (let i = 0; i < customers[firstCustomer].order.length; i++) {
  orders.push(customers[firstCustomer].order[i]);
}

// 7. Add your own order to the customers array, with your name and your taco orders.
customers.push({ name: "Gabrielle", order: ["Classic Taco"] });

// 8. Serve the tacos! pop() one taco at a time out of the orders array, and print out "serving {name of taco}"
let totalTacosServed = 0;
for (let i = 0; i < orders.length - 1; i++) {
  totalTacosServed++;
  console.log(`serving ${orders.pop()}`);
}
let lastTaco = orders.pop();
console.log(`serving ${lastTaco}`);

// 9. The chef is asking you what the last taco you made was. Print out the last item of the last customer's order. "The last customer ordered {name of taco}"
console.log(`The last customer ordered ${lastTaco}`);

// BONUS QUESTIONS:
// 10. At the end of the day, the chef asks you the total # of tacos you made today. Print out, "Chef, I made {number of tacos} tacos today"
/* change 8 to have a const counter that gets incremented each time we run the loop, then return the counter */
console.log(totalTacosServed);

// 11. Write a loop to do tasks 4-8 for every customer, instead of writing it out over and over.
console.log(customers);
for (let i = 0; i < customers.length; i++) {
  console.log(`Now serving ${customers[i].name}`);
  console.log(`they ordered ${customers[i].order.length} tacos`);
  for (let j = 0; j < customers[i].order.length; i++) {
    orders.push(customers[i].order[j]);
    // do I add step 7??
  }
}

for (let i = 0; i < orders.length; i++) {
  console.log(`serving ${orders.pop}`);
}
