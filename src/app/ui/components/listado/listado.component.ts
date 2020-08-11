import { Component, OnInit } from '@angular/core';
import { TheCocktailDBApiService } from '../../../core/services/the-cocktail-dbapi.service';
import { StrIngredient1 } from '../../../core/models/str-ingredient-1';
import { DrinksList } from '../../../core/models/drinks-list';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  ingredientsList: DrinksList[];

  constructor(
    private apiService: TheCocktailDBApiService
  ) { }

  ngOnInit(): void {
    console.log(this.ingredientsList);
    this.getIngredientsList();
    console.log(this.ingredientsList);
  }

  getIngredientsList() {
    return this.apiService.getIngredientsList().subscribe(data => {
      console.log(typeof(data.drinks));
      this.ingredientsList = data.drinks
    });
  }

}
