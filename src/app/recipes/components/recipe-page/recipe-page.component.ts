import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/core/models/recipe.model';
import { recipesService } from 'src/app/core/services/recipes.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css'],
})
export class RecipePageComponent implements OnInit {
  recipe!: Recipe;

  constructor(
    private recipesService: recipesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      const recipeId = this.route.snapshot.params['id'];
      this.recipe = this.recipesService.getRecipeById(recipeId);
  }

}
