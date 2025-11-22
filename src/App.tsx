import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef, type ComponentProps } from "react"
import type { Mesh } from "three"

export function App() {
    const n = 7
    return (
        <div className="w-[100vw] h-[100vh]">
            <Canvas className="bg-indigo-200">
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                {
                    Array.from({ length: n * n }, (_, i) => {
                        const row = Math.floor(i / n)
                        const col = i % n
                        const space = 1.2
                        const color = `hsl(${(i / (n * n)) * 360}, 100%, 75%)`
                        return (
                            <MyCube key={i} color={color} position={[col * space - (Math.floor(n / 2) * space), row * 1.1 - (Math.floor(n / 2) * space), 0]} />
                        )
                    })
                }
                <OrbitControls />
            </Canvas>
        </div>
    )
}

function MyCube({ 
    position, 
    color 
} : {
    position: ComponentProps<"mesh">["position"], 
    color: ComponentProps<"meshStandardMaterial">["color"]
}) {
    const ref = useRef<Mesh>(null)
    useFrame((_state, delta) => {
        if (!ref.current) return;
        ref.current.rotation.x += delta
        ref.current.rotation.y += delta * 0.5
    });
    return (
        <mesh ref={ref} position={position}>
            <boxGeometry />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}