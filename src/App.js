import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './componets/Home/Home';
import Navbar from './componets/Navbar/Navbar';
import ContactPage from './componets/Contacts/ContactPage';
import Login from './componets/Login/Login';
import Register from './componets/Register/Register';
import NotFound from './componets/NotFound/NotFound';
import Footer from './componets/Footer/Footer';

import Posty from './componets/Steamers/Posty/Posty';
import Albin from './componets/Steamers/Albin/Albin';
import Qaixx from './componets/Steamers/Qaixx/Qaixx';
import Trausi from './componets/Steamers/Trausi/Trausi';
import Deathwingua from './componets/Steamers/Deathwingua/Deathwing';
import Comments from './componets/Comments/Comments';

import Barcode from 'react-barcode';
import AboutUs from './componets/About/About';
import { Search } from '@mui/icons-material';
import Clips from './componets/Clips/Clips';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <main id="main-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/barcode" element={<Barcode />} />
            <Route path="/about" element={<AboutUs />} />
            <Route exact path="/search" element={<Search />} />

            <Route path="/posty" element={<Posty />} />
            <Route path="/albin" element={<Albin />} />
            <Route path="/qaixx" element={<Qaixx />} />
            <Route path="/trausi" element={<Trausi />} />
            <Route path="/deathwingua" element={<Deathwingua />} />

            <Route path="/deathwingua/comments" element={<Comments />} />
            <Route path="/deathwingua/clips" element={<Clips />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
