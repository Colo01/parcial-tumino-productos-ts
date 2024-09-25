import { Product } from "./Product";

export class SimpleProduct extends Product {
  private ingredients: Set<string>;

  constructor(code: string, name: string, ingredients: string[]) {
    super(code, name);
    this.ingredients = new Set(ingredients);
  }

  getIngredients(): Set<string> {
    return this.ingredients;
  }

  deleteIngredient(ingredient: string): void {
    this.ingredients.delete(ingredient);
  }
}
