import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'recipes', loadChildren:() => import('./recipes/recipes.module').then(m => m.RecipesModule)},
  { path: '', component: LandingPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
