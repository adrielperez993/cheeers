import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Constants } from '../../shared/config/constants';
import { StrAlcoholic } from '../models/str-alcoholic';
import { StrCategory } from '../models/str-category';
import { StrGlass } from '../models/str-glass';
import { StrIngredient1 } from '../models/str-ingredient-1';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DrinksList } from '../models/drinks-list';

@Injectable({
  providedIn: 'root'
})
export class TheCocktailDBApiService {

  constructor(
    private constants: Constants,
    private http: HttpClient
  ) { }

  public getAlcoholicList() {
    return this.http.get<DrinksList>(this.constants.ALCOHOLIC_LIST_URL)
      .pipe(map(res => res as DrinksList));
  }

  public getCategoriesList() {
    return this.http.get<DrinksList>(this.constants.CATEGORY_LIST_URL)
      .pipe(map(res => res as DrinksList));
  }

  public getGlassesList() {
    return this.http.get<DrinksList>(this.constants.GLASS_LIST_URL)
      .pipe(map(res => res as DrinksList));
  }

  /**
   * TODO: Terminar metodo
   */
  public getIngredientsList(): Observable<StrIngredient1[]> {
    
  }

}
