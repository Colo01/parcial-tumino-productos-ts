export abstract class Product {
  protected code: string;
  protected name: string;

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
  }

  abstract getIngredients(): Set<string>;

  abstract deleteIngredient(ingredient: string): void;

  getName(): string {
    return this.name;
  }

  getCode(): string {
    return this.code;
  }
}
