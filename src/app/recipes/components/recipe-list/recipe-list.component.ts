import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe.model';
import { recipesService } from 'src/app/core/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  
  recipes!:Recipe[];

  constructor(private recipesService: recipesService) { }

  ngOnInit(): void {
    this.recipes= this.recipesService.recipes;
  }

}
