import { useQueryClient } from "@tanstack/react-query"
import { NavLink, Outlet, useLocation, useParams } from "react-router"
import { EditRecipeContextProvider, useEditRecipeContext } from "./hooks/useEditRecipeContext"
import type { Recipe } from "./Recipe"

export function RecipeEditPage() {
    const { id } = useParams()
    const recipeId = id ? Number.parseInt(id) : 1
    return (
        <EditRecipeContextProvider recipeId={recipeId}>
            <RecipeEditMain />
        </EditRecipeContextProvider>
    )
}

export function RecipeEditMain() {
    const queryClient = useQueryClient()
    const { recipe } = useEditRecipeContext()
    const location = useLocation()
    const lastPage = location.pathname.endsWith("part3")
    const handleSave = () => {
        // send to server
        console.dir(recipe)
        queryClient.invalidateQueries({
            queryKey: ["recipe", recipe?.id]
        });
    }
    return recipe && (
        <div className="h-1 grow flex flex-col items-stretch">
            <div className="flex gap-2 justify-center text-lg">
                <span className="font-bold">{recipe.name}</span> bearbeiten
            </div>
            <div className="mt-4 flex gap-2 justify-center">
                <NavLink to="part1">Teil 1</NavLink>
                <NavLink to="part2">Teil 2</NavLink>
                <NavLink to="part3">Teil 3</NavLink>
            </div>
            <div className="m-4 rounded-lg h-1 grow flex flex-col gap-2 border border-neutral-300">
                <Outlet />
            </div>
            {lastPage && (
                <div className="px-4 mb-8 flex justify-end">
                    <button onClick={handleSave}>Save</button>
                </div>
            )}
        </div>
    )
}

export function Part1Page() {
    const { recipe, setRecipe } = useEditRecipeContext()
    return recipe && (
        <div className="p-4 flex flex-col gap-4">
            <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input name="name" id="name" value={recipe.name} onChange={(e) => {
                    setRecipe({
                        ...recipe,
                        name: e.target.value
                    })
                }}></input>
            </div>
            <div className="flex flex-col">
                <label htmlFor="cuisine">Cuisine</label>
                <input name="cuisine" id="cuisine" value={recipe.cuisine} onChange={(e) => {
                    setRecipe({
                        ...recipe,
                        cuisine: e.target.value as Recipe["cuisine"]
                    })
                }}></input>
            </div>
        </div>
    )
}

export function Part2Page() {
    const { recipe, setRecipe } = useEditRecipeContext()
    console.log("rerender...")
    return recipe && (
        <div className="p-4 flex flex-col">
            <div className="flex flex-col">
                <label htmlFor="name">Difficulty</label>
                <input name="name" id="name" value={recipe.difficulty} onChange={(e) => {
                    setRecipe({
                        ...recipe,
                        difficulty: e.target.value as "Easy" | "Medium" | "Hard"
                    })
                }}></input>
            </div>
            <div className="flex flex-col">
                <label htmlFor="cuisine">Cuisine</label>
                <input name="cuisine" id="cuisine" value={recipe.caloriesPerServing} onChange={(e) => {
                    setRecipe({
                        ...recipe,
                        caloriesPerServing: Number.parseInt(e.target.value || "0")
                    })
                }}></input>
                <div className="text-sm text-red-700">
                    {recipe.caloriesPerServing > 200 ? "Macht dick" : ""}
                </div>
            </div>
        </div>
    )
}

export function Part3Page() {
    const { recipe } = useEditRecipeContext()
    return recipe && (
        <div className="p-4 grow flex flex-col">
            <div className="h-1 grow flex flex-col gap-2">
                <div>Summary ... do you want to save</div>
                <pre className="h-1 grow overflow-auto text-xs">
                    {JSON.stringify(recipe, null, 4)}
                </pre>
            </div>
        </div>
    )
}
