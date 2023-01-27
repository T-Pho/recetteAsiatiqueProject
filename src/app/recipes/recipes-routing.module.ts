import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { LandingPageComponent } from '../landing-page/components/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'recipes/:id', component: RecipePageComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: '', component: LandingPageComponent },
  
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
