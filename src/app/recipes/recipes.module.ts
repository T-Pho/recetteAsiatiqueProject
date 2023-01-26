import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { RecipesRoutingModule } from './recipes-routing.module';



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipePageComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ],
  exports:[
    RecipeListComponent,
    RecipeItemComponent,
    RecipePageComponent
  ]
})
export class RecipesModule { }
