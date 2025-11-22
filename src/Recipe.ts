
export type Recipe = {
    id: number
    name: string
    ingredients: string[]
    instructions: string[],
    prepTimeMinutes: number
    cookTimeMinutes: number
    servings: number
    difficulty: 'Easy' | 'Medium' | 'Hard'
    cuisine: "American" | "Asian "| "Brazilian" | "Cocktail"
    | "Greek" | "Hawaiian" | "Indian" | "Italian" | "Japanese"
    | "Korean" | "Lebanese" | "Mediterranean" | "Mexican" | "Moroccan"
    | "Pakistani" | "Russian" | "Smoothie" | "Spanish" | "Thai"
    | "Turkish" | "Vietnamese"
    caloriesPerServing: number
    tags: string[]
    userId: number
}

export async function fetchRecipe(id: number) {
    const response = await fetch(`https://dummyjson.com/recipe/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch recipe');
    }
    const data = await response.json() as Recipe;
    return data;
}
