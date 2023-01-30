import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class recipesService {
  recipes: Recipe[]=[
    {
        "id":1,
        "stars":5,
        "context": "http://schema.org/",
        "type": "Recipe",
        "name": "Pad Thai",
        "author": {
            "type": "Person",
            "name": "John Smith"
        },
        "datePublished": "2022-01-01",
        "description": "A classic Thai dish made with rice noodles, shrimp, and a variety of vegetables.",
        "image": "https://www.example.com/pad-thai.jpg",
        "recipeIngredient": [
            "8 oz rice noodles",
            "2 tbsp vegetable oil",
            "3 cloves garlic, minced",
            "1 lb shrimp, peeled and deveined",
            "4 green onions, chopped",
            "1 red bell pepper, thinly sliced",
            "2 eggs, lightly beaten",
            "1/4 cup fish sauce",
            "3 tbsp soy sauce",
            "2 tbsp brown sugar",
            "1 lime, juiced",
            "1/4 cup chopped peanuts",
            "1/4 cup chopped cilantro"
        ],
        "recipeInstructions": [
            {
                "type": "HowToStep",
                "text": "Soak the rice noodles in warm water for 30 minutes. Drain and set aside."
            },
            {
                "type": "HowToStep",
                "text": "Heat the oil in a large wok or skillet over medium-high heat. Add the garlic and shrimp, and cook for 2-3 minutes, or until the shrimp are pink and cooked through."
            },
            {
                "type": "HowToStep",
                "text": "Add the green onions, bell pepper, and eggs, and stir-fry for 1-2 minutes."
            },
            {
                "type": "HowToStep",
                "text": "Add the fish sauce, soy sauce, brown sugar, and lime juice, and stir-fry for 1-2 minutes more."
            },
            {
                "type": "HowToStep",
                "text": "Add the soaked noodles and toss until they are well coated and heated through."
            },
            {
                "type": "HowToStep",
                "text": "Top with chopped peanuts and cilantro, and serve."
            }
        ],
        "nutrition": {
            "type": "NutritionInformation",
            "calories": "400 calories",
            "fatContent": "20g",
            "carbohydrateContent": "40g",
            "proteinContent": "20g"
        },
        "recipeCategory": "Asian",
        "recipeCuisine": "Thai"
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
