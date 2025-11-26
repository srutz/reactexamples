import type { Recipe } from "./Recipe";

export function RecipeView({ recipe } : { recipe: Recipe }) {
    return (
        <div className="max-w-[600px] m-2 p-4 bg-neutral-100 border border-neutral-300 rounded shadow-xl">
            <p className="text-lg font-bold">{recipe.name} {recipe.id}</p>
            <div className="ml-4 flex gap-2 justify-between">
                <div className="flex flex-col">
                    <p className="mt-2 font-semibold">Summary:</p>
                    <p>Prep Time: {recipe.prepTimeMinutes} minutes</p>
                    <p>Cook Time: {recipe.cookTimeMinutes} minutes</p>
                    <p>Servings: {recipe.servings}</p>
                    <p>Difficulty: {recipe.difficulty}</p>
                    <p>Cuisine: {recipe.cuisine}</p>
                    <p>Calories per Serving: {recipe.caloriesPerServing}</p>
                </div>
                <img src={recipe.image} className="h-[200px] rounded-xl border border-neutral-300" />
            </div>
            <p className="mt-2 font-semibold">Ingredients:</p>
            <ul>
                {recipe.ingredients.map((item, index) => (
                    <li key={index} className="ml-8 list-disc">{item}</li>
                ))}
            </ul>
            <p className="mt-2 font-semibold">Instructions:</p>
            <ul>
                {recipe.instructions.map((item, index) => (
                    <li key={index} className="ml-8 list-decimal">{item}</li>
                ))}
            </ul>
        </div>
    )
}

