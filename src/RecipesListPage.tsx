import { useNavigate } from "react-router";
import { useRecipes } from "./hooks/useRecipes";
import type { Recipe } from "./Recipe";

export function RecipeListPage() {
    const { data: recipesResponse } = useRecipes({
        skip: 2,
        limit: 5
     })
     if (!recipesResponse) {
        return null;
     }
     const recipes = recipesResponse.recipes
     return (
        <div className="h-1 grow flex flex-col gap-2">
            <div className="flex px-4">
                Showing {recipesResponse.skip + 1} - {recipesResponse.skip + recipesResponse.limit}
                {" "} von {recipesResponse.total}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                {recipes.map((recipe) => {
                    return <RecipeThumb key={recipe.id} recipe={recipe} />
                })}
            </div>
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