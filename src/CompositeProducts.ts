import { Product } from "./Product";

export class CompositeProduct extends Product {
  private products: Product[];

  constructor(code: string, name: string, products: Product[]) {
    super(code, name);
    this.products = products;
  }

  getIngredients(): Set<string> {
    const ingredients = new Set<string>();
    for (const product of this.products) {
      for (const ingredient of product.getIngredients()) {
        ingredients.add(ingredient);
      }
    }
    return ingredients;
  }

  deleteIngredient(ingredient: string): void {
    for (const product of this.products) {
      product.deleteIngredient(ingredient);
    }
  }
}
