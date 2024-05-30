import './App.css';
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import React from "react";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}></Route>
            </Routes>
        </Router>

    );
}

export default App;
