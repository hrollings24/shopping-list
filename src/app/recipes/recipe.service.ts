import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListServce } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe(
            "Pizza",
            "This is a pizza",
            "https://cookieandkate.com/images/2016/01/kale-pesto-pizza-recipe-2-320x180.jpg",
            [
                new Ingredient('Cheese', 1),
                new Ingredient('Tomato Sauce', 1),
                new Ingredient('Spinach', 2)
            ]
        ),
        new Recipe("Pasta",
            "This is some pasta",
            "https://delightfuladventures.com/wp-content/uploads/2020/05/vegan-broccoli-pasta-sq.jpg",
            [
                new Ingredient('Pasta', 1),
                new Ingredient('Sauce', 1)
            ]
        )
    ];

    constructor(private slService: ShoppingListServce){

    }

    getRecipes() {
        return this.recipes.slice()
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        console.log('add')
        this.slService.addIngredients(ingredients)
    }
}