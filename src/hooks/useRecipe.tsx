import { useQuery } from "@tanstack/react-query"
import { fetchRecipe } from "../Recipe"

export function useRecipe(recipeId: number) {
    return useQuery({
      queryKey: ["recipe", recipeId],
      queryFn: async() => {
        return fetchRecipe(recipeId)
      },
      staleTime: 1_000_000,
      gcTime: 2_000_000,
    })
}
