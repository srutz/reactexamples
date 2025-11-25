import { NavLink } from "react-router"

export function HelpPage() {
    return (
        <div className="w-[100vw] h-[100vh] bg-indigo-300 flex flex-col gap-2 items-center">
            <div>Hilfe lorem ipsum</div>
            <NavLink to="/">Go to main</NavLink>
        </div>
    )
}