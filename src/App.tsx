import { useState } from "react";
import { RecipeView } from "./RecipeView";
import { useRecipe } from "./hooks/useRecipe";

export function App() {
    const [recipeId, setRecipeId] = useState(() => 5);
    const { data: recipe, isFetching: fetching, refetch } = useRecipe(recipeId)
    return recipe && (
        <div className="w-[100vw] h-[100vh] bg-red-300 overflow-auto flex flex-col items-center">
            <div className="flex gap-2 items-center mt-4 mb-2">
                <button disabled={fetching}
                        onClick={() => setRecipeId(Math.max(1, recipeId - 1))}>
                    Prev</button>
                <button disabled={fetching}
                        onClick={() => {
                            setRecipeId((oldId) => oldId + 1)
                        }}>
                    Next</button>
                <button onClick={() => refetch()}>Reload</button>
            </div>
                <RecipeView recipe={recipe} />
        </div>)
}


