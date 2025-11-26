import { useQueryClient } from "@tanstack/react-query"
import { NavLink, Outlet, useParams } from "react-router"
import { EditRecipeContextProvider, useEditRecipeContext } from "./hooks/useEditRecipeContext"

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
    const handleSave = () => {
        // send to server
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
            </div>            
            <div className="m-4 rounded-lg h-1 grow flex flex-col gap-2 border border-neutral-300">
                <Outlet />
            </div>
            <div className="px-4 mb-8 flex justify-end">
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export function Part1Page() {
    const { recipe } = useEditRecipeContext()
    return recipe && (
        <div className="p-4 flex flex-col">
            <div>{recipe.name}</div>
            <div>{recipe.cuisine}</div>
        </div>
    )
}

export function Part2Page() {
    const { recipe } = useEditRecipeContext()
    return recipe && (
        <div className="p-4 flex flex-col">
            <div>{recipe.difficulty}</div>
            <div>{recipe.cookTimeMinutes}</div>
        </div>
    )
}

