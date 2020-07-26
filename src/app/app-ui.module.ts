import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';

export function themeFactory(themeService: ThemeService) {
  return () => themeService.setThemeOnStart();
}

@NgModule({
  declarations: [],
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
