
import { useEffect, useState } from "react";

export function useStateLocalStorage<T>(key: string, initial: T | (() => T)) {
    const [ value, setValue ] = useState(() => {
        const raw = localStorage.getItem(key)
        if (raw) {
            return JSON.parse(raw);
        } else if (typeof initial === "function") {
            const v = (initial as () => T)()
            localStorage.setItem(key, JSON.stringify(v))
            return v
        } else {
            const v = initial
            localStorage.setItem(key, JSON.stringify(v))
            return v
        }
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [ value, setValue ]
}
