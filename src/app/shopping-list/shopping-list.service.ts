import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListServce {
    ingredientsChanges = new Subject<Ingredient[]>()

    private ingredients: Ingredient[] = [
        new Ingredient("Cheese", 5),
        new Ingredient("Tomato", 3)
    ];
    
    getIngredients(){
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientsChanges.next(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients)
        this.ingredientsChanges.next(this.ingredients.slice())
    }
}