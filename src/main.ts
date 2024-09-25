import { SimpleProduct } from "./SimpleProducts";
import { CompositeProduct } from "./CompositeProducts";
import { ProductRegistry } from "./ProductRegistry";
import * as readline from "readline";

const registry = new ProductRegistry();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log(`
    1. Add Simple Product
    2. Add Composite Product
    3. Print Products
    4. Prohibit Ingredient
    5. Exit
    `);
  rl.question("Choose an option: ", (option) => {
    switch (option) {
      case "1":
        addSimpleProduct();
        break;
      case "2":
        addCompositeProduct();
        break;
      case "3":
        registry.printProducts();
        showMenu();
        break;
      case "4":
        prohibitIngredient();
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Invalid option");
        showMenu();
        break;
    }
  });
}

function addSimpleProduct() {
  rl.question("Enter code: ", (code) => {
    rl.question("Enter name: ", (name) => {
      rl.question("Enter ingredients: ", (ingredients) => {
        const ingredientArray = ingredients.split(",").map((i) => i.trim());
        const product = new SimpleProduct(code, name, ingredientArray);
        registry.addProduct(product);
        console.log("Simple product added.");
        showMenu();
      });
    });
  });
}

function addCompositeProduct() {
  rl.question("Enter code: ", (code) => {
    rl.question("Enter name: ", (name) => {
      rl.question("Enter codes of products: ", (codes) => {
        const codeArray = codes.split(",").map((c) => c.trim());
        const products = registry["products"].filter((p) =>
          codeArray.includes(p.getCode())
        );
        const product = new CompositeProduct(code, name, products);
        registry.addProduct(product);
        console.log("Composite product added.");
        showMenu();
      });
    });
  });
}

function prohibitIngredient() {
  rl.question("Enter ingredient to prohibit: ", (ingredient) => {
    registry.prohibitIngredient(ingredient);
    console.log(`Ingredient ${ingredient} prohibited.`);
    showMenu();
  });
}

showMenu();
