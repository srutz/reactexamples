import { useState, type ReactNode } from "react";
import type { Recipe } from "./Recipe";

export function RecipeView({ recipe } : { recipe: Recipe }) {
    return (
        <div className="max-w-[600px] min-w-[90%] m-2 p-4 bg-neutral-100 border border-neutral-300 rounded shadow-xl">
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
            <Section title="Ingredients">
                <ul>
                    {recipe.ingredients.map((item, index) => (
                        <li key={index} className="ml-8 list-disc">{item}</li>
                    ))}
                </ul>
            </Section>
            <Section title="Instructions">
                <ul>
                    {recipe.instructions.map((item, index) => (
                        <li key={index} className="ml-8 list-decimal">{item}</li>
                    ))}
                </ul>
            </Section>
        </div>
    )
}

function Section({ title, children } : { title: string, children: ReactNode }) {
    const [expanded, setExpanded] = useState(true)
    return (
        <>
            <p onClick={() => setExpanded(!expanded)} 
                className="mt-2 font-semibold select-none cursor-pointer">
                    {title} {expanded ? ":" : "..."}
            </p>
            {expanded && children}
        </>
    )

}

