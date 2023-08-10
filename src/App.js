import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./componets/Home/Home";
import Navbar from "./componets/Navbar/Navbar";
import ContactPage from "./componets/Contacts/ContactPage";
import Login from "./componets/Login/Login";
import Register from "./componets/Register/Register";
import NotFound from "./componets/NotFound/NotFound";
import Footer from "./componets/Footer/Footer";
import Question from "./componets/Question/Question";

import ServersEU from "./componets/Servers/ServersEU";
import VanillaEU from "./componets/Servers/Vanilla/VanillaEU";

import Posty from "./componets/Steamers/Posty/Posty";
import Albin from "./componets/Steamers/Albin/Albin";
import Qaixx from "./componets/Steamers/Qaixx/Qaixx";
import Trausi from "./componets/Steamers/Trausi/Trausi";
import Deathwingua from "./componets/Steamers/Deathwingua/Deathwing";
import HJune from "./componets/Steamers/hJune/hJune";
import R00t9r from "./componets/Steamers/r00t9r/r00t9r";
import CoconutB from "./componets/Steamers/CoconutB/CoconutB";

import Comments from "./componets/Comments/Comments";
import Barcode from "react-barcode";
import AboutUs from "./componets/About/About";
import { Search } from "@mui/icons-material";
import Clips from "./componets/Clips/Clips";
import ForgotPassword from "./componets/ForgotPassword/ForgotPassword";
import PasswordResetSuccess from "./componets/ForgotPassword/PasswordResetSuccess";
import Game from "./componets/Question/Game";
import VanillaUS from "./componets/Servers/Vanilla/VanillaUS";
import ServersUS from "./componets/Servers/ServersUS";
import Fireworks from "./componets/Game-over/Game-over";
import questions from "./componets/Question/Questions";
import Riqqeloff from "./componets/Steamers/Riqqeloff/Riqqeloff";
import Dyanna from "./componets/Steamers/Dyanna/Dyanna";

function App() {
    const randomQuestions = questions
        .slice(0, 15)
        .sort(() => Math.random() - 0.5);

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
                        <Route
                            path="/forgot-password"
                            element={<ForgotPassword />}
                        />
                        <Route
                            path="/password-reset-success"
                            element={<PasswordResetSuccess />}
                        />
                        <Route path="/question" element={<Game />} />
                        {randomQuestions.map((question, index) => (
                            <Route
                                key={index}
                                path={`/question/${index + 1}`}
                                element={
                                    <Question
                                        question={question}
                                        questionIndex={index}
                                        randomQuestions={randomQuestions}
                                    />
                                }
                            />
                        ))}
                        <Route path="/game-over" element={<Fireworks />} />
                        <Route path="/serversEU" element={<ServersEU />} />
                        <Route path="/serversUS" element={<ServersUS />} />
                        <Route
                            path="/serversEU/vanillaEU"
                            element={<VanillaEU />}
                        />
                        <Route
                            path="/serversUS/vanillaUS"
                            element={<VanillaUS />}
                        />
                        <Route path="/posty" element={<Posty />} />
                        <Route path="/posty/comments" element={<Comments />} />
                        <Route path="/posty/clips" element={<Clips />} />
                        <Route path="/albin" element={<Albin />} />
                        <Route path="/albin/comments" element={<Comments />} />
                        <Route path="/albin/clips" element={<Clips />} />
                        <Route path="/qaixx" element={<Qaixx />} />
                        <Route path="/qaixx/comments" element={<Comments />} />
                        <Route path="/qaixx/clips" element={<Clips />} />
                        <Route path="/trausi" element={<Trausi />} />
                        <Route path="/trausi/comments" element={<Comments />} />
                        <Route path="/trausi/clips" element={<Clips />} />
                        <Route path="/deathwingua" element={<Deathwingua />} />
                        <Route
                            path="/deathwingua/comments"
                            element={<Comments />}
                        />
                        <Route path="/deathwingua/clips" element={<Clips />} />
                        <Route path="/hJune" element={<HJune />} />
                        <Route path="/hJune/comments" element={<Comments />} />
                        <Route path="/hJune/clips" element={<Clips />} />
                        <Route path="/r00t9r" element={<R00t9r />} />
                        <Route path="/r00t9r/comments" element={<Comments />} />
                        <Route path="/r00t9r/clips" element={<Clips />} />
                        <Route path="/coconutB" element={<CoconutB />} />
                        <Route
                            path="/coconutB/comments"
                            element={<Comments />}
                        />
                        <Route path="/coconutB/clips" element={<Clips />} />
                        <Route path="/riqqeloff" element={<Riqqeloff />} />
                        <Route
                            path="/riqqeloff/comments"
                            element={<Comments />}
                        />
                        <Route path="/riqqeloff/clips" element={<Clips />} />
                        <Route path="/dyanna" element={<Dyanna />} />
                        <Route path="/dyanna/comments" element={<Comments />} />
                        <Route path="/dyanna/clips" element={<Clips />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
