import { pdf } from "@react-pdf/renderer";
import { useNavigate, useParams } from "react-router";
import { RecipePDFDocument } from "./RecipePDFDocument";
import { RecipeView } from "./RecipeView";
import { useRecipe } from "./hooks/useRecipe";

async function convertImageToBase64(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL('image/jpeg'));
            } else {
                reject(new Error('Failed to get canvas context'));
            }
        };
        img.onerror = reject;
        img.src = url;
    });
}

export function RecipePage() {
    const navigate = useNavigate();
    const { id } = useParams()
    const recipeId = id ? Number.parseInt(id) : 1
    const { data: recipe, isFetching: fetching, refetch } = useRecipe(recipeId)
    const downloadPDF = async () => {
        if (!recipe) return;
        
        // Convert recipe with base64 image
        let recipeWithBase64Image = recipe;
        if (recipe.image) {
            try {
                const base64Image = await convertImageToBase64(recipe.image);
                recipeWithBase64Image = { ...recipe, image: base64Image };
            } catch (error) {
                console.error('Failed to convert image:', error);
                // Continue without image
                recipeWithBase64Image = { ...recipe, image: undefined };
            }
        }
        
        const blob = await pdf(<RecipePDFDocument recipe={recipeWithBase64Image} />).toBlob()
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${recipe.name}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="overflow-auto flex flex-col items-center">
            {recipe ? (
                <RecipeView recipe={recipe} />
            ) : (
                <div>Loading recipe {recipeId} ...</div>
            )}
            <div className="flex gap-2 items-center mt-4 mb-2">
                <button disabled={fetching}
                        onClick={() => navigate("/recipe/" + Math.max(1, recipeId - 1))
                    }>Prev</button>
                <button disabled={fetching}
                        onClick={() => navigate("/recipe/" + (recipeId + 1))
                    }>Next</button>
                <button onClick={() => refetch()}>↻</button>
                <button onClick={downloadPDF}>PDF</button>
                {recipe && (
                    <button onClick={() => {
                        // end current editing
                        localStorage.removeItem("editrecipe")
                        navigate(`/recipe/edit/${recipe.id}/part1`)
                    }
                    }>Edit</button>
                )}
            </div>
        </div>)
}



