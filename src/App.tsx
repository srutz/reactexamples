const titles = [
    { message: "Ciao", subtitle: "Italian"},
    { message: "Buenas noches", subtitle: "Spanish"},
    { message: "Goode middag", subtitle: "Dutch"},
    { message: "Bon nuit", subtitle: "French"},
]
export function App() {
    return (
        <div className="flex flex-col gap-1">{
            titles.map((title, index) => 
                <Title key={index}
                    message={title.message}
                    subtitle={title.subtitle} />
            )}
        </div>)
}

interface TitleProps { message: string,  subtitle?: string }
function Title({ message, subtitle }: TitleProps) {
    return (
        <div className="m-4 p-4 rounded 
                flex flex-col bg-gray-200 shadow-xl">
            <div className="font-bold">
                {message}
            </div>
            {subtitle && (
                <div className="text-xs fg-gray-600">{subtitle}</div>
            )}
        </div>
    )
}