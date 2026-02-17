import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from "../components/Header/Header";

const RouterApp = () => {
    return (
        <BrowserRouter>
        <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;