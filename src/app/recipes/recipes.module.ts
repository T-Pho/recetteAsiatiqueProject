import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    RecipeListComponent,
    RecipeItemComponent,
    RecipePageComponent
  ]
})
export class RecipesModule { }
