import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/**
 *  Modules
 */
import { AppRoutingModule } from './app-routing.module';
import { AppUiModule } from './app-ui.module';

/**
 *  Components
 */
import { AppComponent } from './app.component';
import { ListadoComponent } from './ui/components/listado/listado.component';

/**
 *  Services
 */
import { TheCocktailDBApiService } from './core/services/the-cocktail-dbapi.service';
import { Constants } from './shared/config/constants';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppUiModule,
    HttpClientModule,
  ],
  providers: [
    Constants,
    TheCocktailDBApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
