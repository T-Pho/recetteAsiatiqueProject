import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class recipesService {
  recipes: Recipe[]=[
    {
      "id": 1,
      "stars": 5,
      "name": "Maki au thon",
      "author":  "John Doe",
      "datePublished": "2023-01-30",
      "description": "Les makis au thon sont des rouleaux de sushi remplis de thon cru, de riz et d'algues nori.",
      "prepTime": "PT20M",
      "cookTime": "PT10M",
      "totalTime": "PT30M",
      "recipeYield": "4 portions",
      "recipeCategory": "Plat principal",
      "recipeCuisine": "Japonaise",
      "image": "https://www.example.com/thon-maki.jpg",
      "nutrition": {
        "servingSize": "100g",
        "calories": "250 calories",
        "fatContent": "10g",
        "carbohydrateContent": "30g",
        "proteinContent": "15g"
      },
      "recipeIngredient": [
        "200g de thon cru",
        "2 tasses de riz à sushi",
        "4 feuilles d'algues nori",
        "1 avocat",
        "1 concombre",
        "1/4 tasse de vinaigre de riz",
        "1 cuillère à soupe de sucre",
        "1 cuillère à soupe de sel"
      ],
      "recipeInstructions": [
        "Cuire le riz à sushi selon les instructions sur l'emballage.",
        "Mélanger le vinaigre de riz, le sucre et le sel dans une petite casserole.",
        "Chauffer à feu moyen jusqu'à ce que le sucre et le sel soient dissous.",
        "Laisser refroidir complètement.",
        "Couper le thon, l'avocat et le concombre en fines lanières.",
        "Placer une feuille d'algue nori sur un tapis à sushi en bambou.",
        "Étaler une couche uniforme de riz sur l'algue nori, en laissant une bordure de 1 cm à l'extrémité supérieure.",
        "Disposer les lanières de thon, d'avocat et de concombre en une ligne sur le riz.",
        "Rouler le tapis à sushi pour former un rouleau serré.",
        "Couper le rouleau en tranches égales avec un couteau tranchant et humide."
      ]
    }
    
    
  ]

  getRecipeById(recipeId:number): Recipe{
    const recipe = this.recipes.find(recipe => recipe.id === recipeId);
    if (!recipe) {
        throw new Error('Oups, pas de recette!');
    } else {
        return recipe;
    }
  }
}
