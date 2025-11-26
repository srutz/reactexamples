import { useEffect } from "react";
import { RecipeView } from "./RecipeView";
import { useRecipe } from "./hooks/useRecipe";
import { useLocation, useNavigate, useParams } from "react-router";

export function RecipePage() {
    const navigate = useNavigate();
    const { id } = useParams()
    const recipeId = id ? Number.parseInt(id) : 1
    const { data: recipe, isFetching: fetching, refetch } = useRecipe(recipeId)
    return (
        <div className="overflow-auto flex flex-col items-center">
            {recipe ? (
                <RecipeView recipe={recipe} />
            ) : (
                <div>Loading recipe {recipeId} ...</div>
            )}
            <div className="flex gap-2 items-center mt-4 mb-2">
                <button disabled={fetching}
                        onClick={() => navigate("/recipe/" + Math.max(1, recipeId - 1))
                    }>Prev</button>
                <button disabled={fetching}
                        onClick={() => navigate("/recipe/" + (recipeId + 1))
                    }>Next</button>
                <button onClick={() => refetch()}>↻</button>
            </div>
        </div>)
}



