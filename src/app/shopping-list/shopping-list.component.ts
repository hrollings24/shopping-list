import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServce } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]

  constructor(private slService: ShoppingListServce) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients()
    this.slService.ingredientsChanges.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    )
  }

}
