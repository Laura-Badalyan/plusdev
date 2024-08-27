import { createBrowserRouter } from 'react-router-dom';
import { PublicRoutes } from "./components/routes/public-route";
import AppHome from "./pages/home";
import { PATHS } from "./helpers/constants";
import { SignIn } from './pages/sign-in/index';


export const router = createBrowserRouter([
    {
        element: <PublicRoutes />,
        children: [
            {
                path: PATHS.ROOT,
                element: <AppHome />,
            },
            {
                path: PATHS.SIGN_IN,
                element: <SignIn />,
            }
        ]
    },
])