// object literals - a way of skimming down the code for key-value pairs

function createBookShop(inventory) {
  return {
    inventory, //// in ES6, if key and value are both the same (inventory:inventory), then we can simply compress k:k notation into k
    inventoryTotal() {
      //// ES6 - can compress f_name: function(){} into f_name(){}
      return this.inventory.reduce((sum, item) => sum + item.price, 0);
    },
    pricePerTitle: function (title) {
      return this.inventory.find((item) => item.title === title).price;
    },
  };
}

const inventory = [
  { title: "Fiction", price: 23 },
  { title: "Prose", price: 230 },
];

const aneesBook = createBookShop(inventory);
console.log(aneesBook.pricePerTitle("Prose"));
console.log(aneesBook.inventoryTotal());
