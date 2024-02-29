import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Contatos from "../pages/Contatos"
import Relatorios from "../pages/Relatorios"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/contatos',
        element: <Contatos />
    },
    {
        path: '/relatorios',
        element: <Relatorios />
    },

    {
        path: '/lorem',
        element: <Contatos />
    },
    {
        path: '/loremIpsu',
        element: <Contatos />
    }])

const RoutesApp: React.FC = () => {
    return <RouterProvider router={router} />
}

export default RoutesApp