import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './core/services/theme.service';
import { DrinkCategoryCardComponent } from './shared-ui/drink-category/drink-category-card.component';

export function themeFactory(themeService: ThemeService) {
  return () => themeService.setThemeOnStart();
}

@NgModule({
  declarations: [
    DrinkCategoryCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    ThemeService,
    { provide: APP_INITIALIZER, useFactory: themeFactory, deps: [ ThemeService ], multi: true }
  ]
})
export class AppUiModule { }
