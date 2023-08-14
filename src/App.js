import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Button} from "react-bootstrap";
import CoursePage from "./Pages/CoursePage";
import ProfessorPage from "./Pages/ProfessorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
]);

export default function App() {
    return (
        <div>
            {/*<Button href={'/CoursePage'}>Login</Button>*/}
            <BrowserRouter>
                <Routes>
                    <Route path={'/CoursePage/*'} element={<CoursePage />} />
                    <Route path={'/ProfessorPage/*'} element={<ProfessorPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );

}
