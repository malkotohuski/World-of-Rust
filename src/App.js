import React from 'react';
import './App.css';
import { Routes, Route, } from 'react-router-dom';
import Home from './componets/Home/Home';
import Navbar from './componets/Navbar/Navbar';
import ContactPage from './componets/Contacts/ContactPage';
import Login from './componets/Login/Login';
import Register from './componets/Register/Register';
import NotFound from './NotFound/NotFound';
import Posty from './componets/Steamers/Posty/Posty';
import Albin from './componets/Steamers/Albin/Albin';
import Qaixx from './componets/Steamers/Qaixx/Qaixx';
import Trausi from './componets/Steamers/Trausi/Trausi';








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
                    <Route path='/*' element={<NotFound />} />

                    <Route path='/posty' element={<Posty />} />
                    <Route path='/albin' element={<Albin />} />
                    <Route path='/qaixx' element={<Qaixx />} />
                    <Route path='/trausi' element={<Trausi />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
