import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../pages/Layout";
import AboutMe from "../pages/AboutMe/index.jsx";

export  const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
    },
    {
        path:"/aboutMe",
        element:<AboutMe/>
    }
]);
