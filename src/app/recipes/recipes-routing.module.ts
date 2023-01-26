import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

const routes: Routes = [
  { path: ':Id', component: RecipePageComponent },
  { path: '', component: RecipeListComponent },
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
]
})
export class RecipesRoutingModule { }
