import { NavLink, Outlet } from "react-router";

export function AppPage() {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-col">
            <MenuBar />
            <div className="flex flex-col mt-2 h-1 grow overflow-y-auto overflow-x-hidden">
                <Outlet />
            </div>
        </div>
    )
}

function MenuBar() {
    return (
        <div className="border-b bg-zinc-100 border-neutral-300 
            items-center px-4
            h-12 flex gap-2">
            <div className="mr-16 font-bold select-none">⍚ Applogo</div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/recipes">Recipes</NavLink>
            <NavLink to="/help">Help</NavLink>
        </div>
    )
}