import { useNavigate, useSearchParams } from "react-router";
import { useRecipes } from "./hooks/useRecipes";
import type { Recipe } from "./Recipe";

const PAGE_SIZE = 5;

export function RecipeListPage() {
    const [ params, setParams ] = useSearchParams()
    const page = params.get("page") ? Number.parseInt(params.get("page")!) : 1;
    const { data: recipesResponse } = useRecipes({
        skip: (page - 1) * PAGE_SIZE,
        limit: PAGE_SIZE
    })
    if (!recipesResponse) {
        return null;
    }
    const pageCount = Math.ceil(recipesResponse.total / PAGE_SIZE)
    const change = (delta: number) => {
        const newPage = page + delta
        if (newPage >= 1 && newPage <= pageCount) {
            setParams({ page: newPage.toString() } )
        }
    }
    const recipes = recipesResponse.recipes
    const hasPrev = page > 1
    const hasNext = page < pageCount - 1
    return (
        <div className="h-1 grow flex flex-col gap-2">
            <div className="flex px-4 items-center gap-2">
                Showing {recipesResponse.skip + 1} - {recipesResponse.skip + recipesResponse.limit}
                {" "} von {recipesResponse.total}
                <button disabled={!hasPrev} onClick={() => change(-1)}>Prev</button>
                <button disabled={!hasNext} onClick={() => change(1)}>Next</button>
            </div>
            <div className="overflow-auto flex flex-wrap gap-2 justify-center items-start">
                {recipes.map((recipe) => {
                    return <RecipeThumb key={recipe.id} recipe={recipe} />
                })}
            </div>
        </div>
    )
}

function RecipeThumb({ recipe }: { recipe: Recipe }) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/recipe/${recipe.id}`)
    }
    return (
        <div className="max-w-[240px] max-h-[150px] w-[240px] m-2 p-4 bg-neutral-100 cursor-pointer
                hover:border-neutral-300
                border border-neutral-200 rounded shadow-xl flex flex-col items-center"
            onClick={handleClick}>
            <img src={recipe.image} className="h-12" />
            <div className="font-semibold text-sm">{recipe.name} {recipe.id}</div>
            <div className="text-neutral text-xs">{recipe.mealType} / {recipe.cuisine}</div>
        </div>
    )
}