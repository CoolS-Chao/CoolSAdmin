import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../views/login/Login";
import NewsSandBox from "../views/sandbox/BlogSandBox";
// import {useLocalStorage} from "./"

export default function IndexRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* react-router V6 不使用 Switch 与 component */}
                <Route path="/login" element={<Login />}></Route>
                <Route path="/">
                    <Route path="/home/*" element={<NewsSandBox />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}