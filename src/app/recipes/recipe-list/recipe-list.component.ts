import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Pizza", "This is a pizza", "https://cookieandkate.com/images/2016/01/kale-pesto-pizza-recipe-2-320x180.jpg"),
    new Recipe("Pasta", "This is some pasta", "https://delightfuladventures.com/wp-content/uploads/2020/05/vegan-broccoli-pasta-sq.jpg")
  ];


  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }

}
