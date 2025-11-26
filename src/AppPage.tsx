import { NavLink, Outlet } from "react-router";

export function AppPage() {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-col">
            <MenuBar />
            <Outlet />
        </div>
    )
}

function MenuBar() {
    return (
        <div className="border-b bg-zinc-100 border-neutral-300 
            items-center px-4
            h-16 flex gap-2">
            <div className="mr-16 font-bold">Applogo</div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Recipes</NavLink>
            <NavLink to="/">Help</NavLink>
        </div>
    )
}