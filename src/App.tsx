import { useEffect, useState } from "react"

export function App() {
    return (
        <div>
            <WindowInfo></WindowInfo>
            <DynamicLabel text="Dynamic Text" />
        </div>
    )
}

function DynamicLabel({ text} : { text: string}) {
    useWindowSize(); // listen to window-size changes
    useState(1);
    if (window.innerWidth < 300) {
        return null;
    }
    return (<div>{text}</div>)
}

function WindowInfo() {
    const { width, height } = useWindowSize();
    return (
        <div>Windowsize {width} x {height}</div>
    )
}

function useWindowSize() {
    const [val, setVal] = useState(1)
    useEffect(() => {
        const ls = () => {
            setVal(-val) // trigger re-render
        }
        window.addEventListener("resize", ls);
        return () => window.removeEventListener("resize", ls)
    }, [val])
    return { width: window.innerWidth, height: window.innerHeight }
}

