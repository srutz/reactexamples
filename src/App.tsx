
export function App() {
    return (
        <div>
            <Title message="Welcome to React" />
        </div>
    )
}

function Title({message }: {message: string}) {
    const chars = message.split("")
    return (
        <div className="flex text-lg font-bold ">
            {chars.map((char, index) => (
                <Char char={char} index={index} key={index} />
            ))}
        </div>
    )
}

function Char({char, index}: {char: string, index: number}) {
    return (
        <div className="mx-[-0.5px] animate-flip-up"
            style={{ animationDelay: `${index * 50}ms` }}
            >
            {char === " " ? "\u00A0" : char}
        </div>
    )
}
