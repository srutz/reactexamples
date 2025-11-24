import { useEffect, useState } from "react"

export function App() {
    return (
        <div>
            <WindowInfo></WindowInfo>
        </div>
    )
}

function WindowInfo() {
    const [val, setVal] = useState(1)
    useEffect(() => {
        const ls = () => {
            setVal(-val) // trigger re-render
        }
        window.addEventListener("resize", ls);
        return () => window.removeEventListener("resize", ls)
    }, [val])
    return (
        <div>Windowsize {window.innerWidth} x {window.innerHeight}</div>
    )
}
