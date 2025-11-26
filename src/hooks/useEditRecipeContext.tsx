import { createContext, useContext, useEffect, type ReactNode } from "react";
import type { Recipe } from "../Recipe";
import { useRecipe } from "./useRecipe";
import { useStateLocalStorage } from "./useStateLocalStorage";

type EditRecipeContextType = {
    recipe: Recipe,
    setRecipe: (r: Recipe) => void
}

const EditRecipeContext = createContext<EditRecipeContextType|null>(null)

export function EditRecipeContextProvider({ recipeId, children} 
: {
    recipeId: number
    children: ReactNode 
}) {
    const { data: originalRecipe } = useRecipe(recipeId)
    const [ recipe, setRecipe ] = useStateLocalStorage("editrecipe", null);
    useEffect(() => {
        const copy = {
            ...originalRecipe
        }
        setRecipe(copy);
    }, [originalRecipe, setRecipe])
    return (
        <EditRecipeContext.Provider value={{
            recipe,
            setRecipe,
        }}>{children}</EditRecipeContext.Provider>        
    )
}

export function useEditRecipeContext() {
    const context = useContext(EditRecipeContext)
    if (!context) {
        throw "context provider not found"
    }
    return context;
}