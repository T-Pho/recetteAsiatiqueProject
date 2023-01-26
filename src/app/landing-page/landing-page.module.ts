import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RecipesModule } from '../recipes/recipes.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, RecipesModule],
  exports: [LandingPageComponent],
})
export class LandingPageModule implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onContinue(): void {
    this.router.navigateByUrl('recipes');
  }
}
