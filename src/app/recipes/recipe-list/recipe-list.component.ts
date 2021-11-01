import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Pizza", "This is a pizza", "https://cookieandkate.com/images/2016/01/kale-pesto-pizza-recipe-2-320x180.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
