import { useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router"
import { useRecipe } from "./hooks/useRecipe"

export function RecipeEditPage() {
    const queryClient = useQueryClient()
    const { id } = useParams()
    const recipeId = id ? Number.parseInt(id) : 1
    const { data: recipe } = useRecipe(recipeId)
    const handleSave = () => {
        // send to server
        queryClient.invalidateQueries({
            queryKey: [ "recipe", recipe?.id  ]
        });
    }

    return recipe && (
        <div className="h-1 grow flex flex-col items-stretch">
            <div className="p-4 h-1 grow flex flex-col">
                {recipe.name}

            </div>
            <div className="px-4 mb-8 flex justify-end">
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}