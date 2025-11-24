import type { ComponentProps, ReactNode } from "react"
import { cn } from "./util";

export function App() {
    return (
        <div>
            <H1 title="Ü777" >
                Über<span className="font-bold">sch</span>rift
            </H1>
            <H1 title="Ü777" className="underline my-8 text-2xl">
                Überschrift
            </H1>
            <Button>hello</Button>
        </div>
    )
}

/*
 * H1 behaves like h1 but is custom
 */
function H1({ children, className, ...rest }: {
    children?: ReactNode
} & ComponentProps<"h1">) {
    return (
        <h1 className={cn("my-2 text-3xl font-semibold", className)}
            {...rest}  >
            {children}
        </h1>
    )
}

/*
 * Button behaves like button but is custom
 */
function Button({ children, className, ...rest }: {
    children?: ReactNode
} & ComponentProps<"button">) {
    return (
        <button className={cn("min-w-[150px] rounded p-2 bg-blue-500 text-white",
            className)}
            {...rest}  >
            {children}
        </button>
    )
}

