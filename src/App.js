import React from 'react';
import './App.css';
import { Routes, Route, } from 'react-router-dom';
import Home from './componets/Home/Home';
import Navbar from './componets/Navbar/Navbar';


function App() {
    return (

        <div className="App">
            <Navbar />
            <main id='home-page'>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
