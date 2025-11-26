import { useRecipes } from "./hooks/useRecipes";

export function RecipeListPage() {
    const { data: recipesResponse } = useRecipes({
        skip: 10,
        limit: 20
     })
     if (!recipesResponse) {
        return null;
     }
     const recipes = recipesResponse.recipes
     return (
        <pre >{JSON.stringify(recipes, null, 4)}</pre>
     )
}