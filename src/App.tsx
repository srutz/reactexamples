import { useEffect, useState } from "react";
import { fetchRecipe, type Recipe } from "./Recipe";
import { RecipeView } from "./RecipeView";

export function App() {
    const [recipeId, setRecipeId] = useState(1);
    const { recipe, fetching } = useRecipe(recipeId)
    return recipe && (
        <div className="w-[100vw] h-[100vh] bg-red-300 overflow-auto flex flex-col items-center">
            <div className="flex gap-2 items-center mt-4 mb-2">
                <button disabled={fetching}
                        onClick={() => setRecipeId(Math.max(1, recipeId - 1))}>
                    Prev</button>
                <button disabled={fetching}
                        onClick={() => setRecipeId(recipeId + 1)}>
                    Next</button>
            </div><RecipeView recipe={recipe} />
        </div>)
}

function useRecipe(recipeId: number) {
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [fetching, setFetching] = useState(false)
    useEffect(() => {
        (async () => {
            setFetching(true)
            try {
                await delay(recipeId == 10 ? 7_000 : 3_000)
                const fetchedRecipe = 
                    await fetchRecipe(recipeId);
                setRecipe(fetchedRecipe);
            } finally { setFetching(false) }
        })();
    }, [ recipeId]); /// watch recipeId / onRecipeIdChanged-Code
    return { recipe: recipe, fetching: fetching }
}

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}