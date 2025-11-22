import { useEffect, useState } from "react";
import { fetchRecipe, type Recipe } from "./Recipe";
import { RecipeView } from "./RecipeView";

export function App() {
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    useEffect(() => {
        (async () => {
            const fetchedRecipe = await fetchRecipe(11);
            setRecipe(fetchedRecipe);
        })();
    }, []);
    if (!recipe)
        return null;
    return (
        <RecipeView recipe={recipe} />
    )
}
