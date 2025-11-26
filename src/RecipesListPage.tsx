import { useNavigate } from "react-router";
import { useRecipes } from "./hooks/useRecipes";
import type { Recipe } from "./Recipe";
import { RecipeView } from "./RecipeView";

export function RecipeListPage() {
    const { data: recipesResponse } = useRecipes({
        skip: 10,
        limit: 50
     })
     if (!recipesResponse) {
        return null;
     }
     const recipes = recipesResponse.recipes
     return (
        <div className="flex flex-wrap gap-2 justify-center">
            {recipes.map((recipe) => {
                return <RecipeThumb key={recipe.id} recipe={recipe} />
            })}
        </div>
     )
}

function RecipeThumb({ recipe } : { recipe: Recipe}) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/recipe/${recipe.id}`)
    }
    return (
        <div className="max-w-[300px] w-[300px] m-2 p-4 bg-neutral-100 cursor-pointer
                hover:border-neutral-300
                border border-neutral-200 rounded shadow-xl flex flex-col items-center"
                onClick={handleClick}>
            <img src={recipe.image} className="h-12" />
            <div className="font-semibold text-sm">{recipe.name} {recipe.id}</div>
            <div className="text-neutral text-xs">{recipe.cuisine}</div>
        </div>
    )
}