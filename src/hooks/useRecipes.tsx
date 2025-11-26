import { useQuery } from "@tanstack/react-query";
import type { Recipe } from "../Recipe";


export type RecipesResponse = {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
};

export function useRecipes(options : { skip: number, limit?: number}) {
    const { skip, limit = 10} = options;
    return useQuery({
        queryKey: [ "recipes", skip, limit],
        queryFn: async() => {
            const url = `https://dummyjson.com/recipes?skip=${skip}&limit=${limit}`
            const r = await fetch(url);
            const data = await r.json()
            return data as RecipesResponse  
        },
        placeholderData: d => d,
        staleTime: 1_000_000,
        gcTime: 4_000_000,
    })
}