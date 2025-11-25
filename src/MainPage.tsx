import { useNavigate } from "react-router";

export function MainPage() {
    const navigate = useNavigate();
    const handleRecipe = () => {
        navigate("/recipe/1")
    }
    return (
        <div className="w-[100vw] h-[100vh] bg-orange-300 flex flex-col gap-2 items-center">
            <div>Main-Page lorem ipsum</div>
            <button onClick={handleRecipe}>Go to recipe 1</button>
        </div>
    )
}