import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/core/models/recipe.model';
import { recipesService } from 'src/app/core/services/recipes.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(
    private recipesService: recipesService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  onViewRecipe() {
    this.router.navigateByUrl(`recipes/${this.recipe.id}`);
  }

}
