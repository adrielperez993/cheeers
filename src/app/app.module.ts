import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 *  Modules
 */
import { AppRoutingModule } from './app-routing.module';
import { AppUiModule } from './app-ui.module';

/**
 *  Components
 */
import { AppComponent } from './app.component';

/**
 *  Services
 */
import { TheCocktailDBApiService } from './services/the-cocktail-dbapi.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppUiModule,
  ],
  providers: [
    TheCocktailDBApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
