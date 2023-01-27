import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { RecipesRoutingModule } from './recipes-routing.module';



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeCardComponent,
    RecipePageComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ],
  exports:[
    RecipeListComponent,
    RecipeCardComponent,
    RecipePageComponent
  ]
})
export class RecipesModule { }
