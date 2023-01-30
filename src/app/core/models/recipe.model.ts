import { Nutrition } from "./nutrition.model";

export class Recipe {
    id!: number;
    stars!:number;
    name!: string;
    author!: string;
    datePublished!: string;
    description!: string;
    prepTime!: string;
    cookTime!: string;
    totalTime!: string;
    recipeYield!: string;
    recipeCategory!: string;
    recipeCuisine!: string;
    image!: string;
    nutrition!: Nutrition;
    recipeIngredient!: string[];
    recipeInstructions!: string[];
  }
  