import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css"
import { App } from './App'
import { createBrowserRouter, RouterProvider } from "react-router"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelpPage } from './HelpPage'

const queryClient = new QueryClient();
const router = createBrowserRouter([
    {
        path: "/", element: <App/>
    },
    {
        path: "/help", element: <HelpPage />
    },
    {
        path: "*", element: <div>Die Seite gibt es nicht</div>
    }
])

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
)
