import { useNavigate } from "react-router";

console.log("MainPage loaded");

export function MainPage() {
    const navigate = useNavigate();
    const handleRecipe = () => {
        navigate("/recipes")
    }
    return (
        <div className="grow flex flex-col gap-2 items-center">
            <h1 className="my-4 text-4xl">Your recipe app</h1>
            <button onClick={handleRecipe}>Go to the recipes</button>
        </div>
    )
}