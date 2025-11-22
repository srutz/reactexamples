import { useEffect, useState } from "react";
import { parseAsInteger, useQueryState } from 'nuqs'
import { fetchRecipe, type Recipe } from "./Recipe";
import { RecipeView } from "./RecipeView";

export function App() {
    const [recipeId, setRecipeId] = useQueryState("id",
        parseAsInteger.withDefault(1),
    );    
    
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    useEffect(() => {
        (async () => {
            const fetchedRecipe = await fetchRecipe(recipeId);
            setRecipe(fetchedRecipe);
        })();
    }, [recipeId]);
    if (!recipe)
        return null;
    return (
        <div className="w-[100vw] h-[100vh] bg-red-300 overflow-auto flex flex-col items-center">
            <div className="flex gap-2 items-center mt-4 mb-2">
                <button onClick={() => setRecipeId(Math.max(1, recipeId - 1))}>Prev</button>
                <button onClick={() => setRecipeId(recipeId + 1)}>Next</button>
            </div>
            <RecipeView recipe={recipe} />
        </div>
    )
}
