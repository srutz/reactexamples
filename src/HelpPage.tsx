import { useNavigate } from "react-router"

export function HelpPage() {
    const navigate = useNavigate();
    const handleMain = () => {
        navigate("/")
        //location.href = "/"
    }
    return (
        <div className="w-[100vw] h-[100vh] bg-indigo-300 flex flex-col gap-2 items-center">
            <div>Hilfe lorem ipsum</div>
            <button onClick={handleMain}>Go to main</button>
        </div>
    )
}