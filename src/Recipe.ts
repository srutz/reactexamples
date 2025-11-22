
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

