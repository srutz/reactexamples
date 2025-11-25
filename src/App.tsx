import { useState } from "react";
import { RecipeView } from "./RecipeView";
import { useRecipe } from "./hooks/useRecipe";
import { useNavigate } from "react-router";

export function App() {
    const navigate = useNavigate();
    const [recipeId, setRecipeId] = useState(() => 5);
    const { data: recipe, isFetching: fetching, refetch } = useRecipe(recipeId)
    const handleHelp = () => {
        navigate("/help")
    }
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
                <button onClick={handleHelp}>Go to help</button>
            </div>
                <RecipeView recipe={recipe} />
        </div>)
}


