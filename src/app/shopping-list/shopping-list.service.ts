import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListServce {
    ingredientsChanges = new EventEmitter<Ingredient[]>()

    private ingredients: Ingredient[] = [
        new Ingredient("Cheese", 5),
        new Ingredient("Tomato", 3)
    ];
    
    getIngredients(){
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientsChanges.emit(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients)
        this.ingredientsChanges.emit(this.ingredients.slice())
    }
}