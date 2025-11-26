import { NavLink } from "react-router"

export function HelpPage() {
    return (
        <div className="grow bg-indigo-300 flex flex-col gap-2 items-center">
            <div>Hilfe lorem ipsum. Beschreibung der Bedienung 123</div>
            <NavLink to="/">Go to main</NavLink>
        </div>
    )
}