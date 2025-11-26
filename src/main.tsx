import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router"
import { AppPage } from './AppPage'
import { MainPage } from './MainPage'
import { RecipePage } from './RecipePage'
import { RecipeListPage } from './RecipesListPage'
import "./styles.css"

const queryClient = new QueryClient();
const router = createBrowserRouter([
    {
        path: "/", element: <AppPage />, children: [
            {
                path: "/", element: <MainPage />
            },
            {
                path: "/recipes", element: <RecipeListPage />
            },
            {
                path: "/recipe/:id", element: <RecipePage />
            },
            {
                path: "/help",
                lazy: async () => {
                    const { HelpPage } = await import("./HelpPage");
                    return { Component: HelpPage };
                }
            },
            {
                path: "*", element: <div className="p-4">Die Seite gibt es nicht</div>
            }
        ]
    },
])

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
)
