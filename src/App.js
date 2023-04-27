import React from 'react';
import './App.css';
import { Routes, Route, } from 'react-router-dom';
import Home from './componets/Home/Home';
import Navbar from './componets/Navbar/Navbar';
import ContactPage from './componets/Contacts/ContactPage';


function App() {
    return (

        <div className="App">
            <Navbar />
            <main id='home-page'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contacts' element={<ContactPage />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
