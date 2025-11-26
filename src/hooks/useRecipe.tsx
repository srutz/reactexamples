import { useQuery } from "@tanstack/react-query"
import { fetchRecipe } from "../Recipe"

export function useRecipe(recipeId: number) {
    return useQuery({
      queryKey: ["recipe", recipeId],
      queryFn: async() => {
        await delay(5)
        return fetchRecipe(recipeId)
      },
      staleTime: 1_000_000,
      gcTime: 2_000_000,
    })
}

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
