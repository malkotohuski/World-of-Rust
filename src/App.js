import React from 'react';
import './App.css';
import { Routes, Route, } from 'react-router-dom';
import Home from './componets/Home/Home';
import Navbar from './componets/Navbar/Navbar';
import ContactPage from './componets/Contacts/ContactPage';
import Login from './componets/Login/Login';
import Register from './componets/Register/Register';








function App() {
    return (

        <div className="App">
            <Navbar />
            <main id='main-page'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contacts' element={<ContactPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
