import { createBrowserRouter } from "react-router-dom";
import { Checker } from "../features/Checker/Checker";
import { Home } from "../components/Home";
import { Modeler } from "../features/Modeler/Modeler";
import { Editor } from "../features/Editor/Editor";
import { Layout } from "../components/Layout/Layout";
import { MakerLayout } from "../components/Layout/MakerLayout";
import { CheckerLayout } from "../components/Layout/CheckerLayout";
import { MakerEdits } from "../features/Maker/MakerEdits";
import { Maker } from "../features/Maker/Maker";
import { CheckerEdits } from "../features/Checker/CheckerEdits";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true, 
                element: <Home />
            },
            {
                path: '/maker',
                element: <MakerLayout />,
                children: [
                    {
                        index: true,
                        element: <Maker />
                    },
                    {
                        path: ':id',
                        element: <MakerEdits />
                    }
                ]
            },
            {
                path: '/checker',
                element: <CheckerLayout />,
                children: [
                    {
                        index: true,
                        element: <Checker />
                    },
                    {
                        path: ':id',
                        element: <CheckerEdits />
                    }
                ]
            },
            {
                path: '/modeler',
                children: [
                    {
                        index: true,
                        element: <Modeler />
                    }
                ]
            },
            {
                path: '/editor',
                children: [
                    {
                        index: true,
                        element: <Editor />
                    }
                ]
            }
        ]
    }
])