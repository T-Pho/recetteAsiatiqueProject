import { Author } from './author.model';
import { Nutrition } from './nutrition.model';
import { RecipeInstruction } from './recipe-instruction.model';


export class Recipe {
    id!: number;
    stars!: number;
    context!: string;
    type!: string;
    name!: string;
    author!: Author;
    datePublished!: string;
    description!: string;
    image!: string;
    recipeIngredient!: string[];
    recipeInstructions!: RecipeInstruction[];
    nutrition!: Nutrition;
    recipeCategory!: string;
    recipeCuisine!: string;
}
