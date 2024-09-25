import { Product } from "./Product";

export class ProductRegistry {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  printProducts(): void {
    for (const product of this.products) {
      console.log(`Product: ${product.getName()} (Code: ${product.getCode()})`);
      console.log(
        `Ingredients: ${Array.from(product.getIngredients()).join(", ")}`
      );
    }
  }

  prohibitIngredient(ingredient: string): void {
    for (const product of this.products) {
      product.deleteIngredient(ingredient);
    }
  }
}
