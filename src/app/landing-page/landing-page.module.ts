import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RecipeListComponent } from '../recipes/components/recipe-list/recipe-list.component';
import { RecipesModule } from '../recipes/recipes.module';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    RecipesModule
  ],
  exports:[
    LandingPageComponent
  ]
})
export class LandingPageModule { }
