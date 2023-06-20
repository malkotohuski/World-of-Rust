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

function App() {
    const questions = [
        {
            question: "Which company made the game Rust?",
            answers: ["Facepunch", "Blizzard", "EA Sport", "Rockstar Games"],
            correctAnswerIndex: 0,
        },
        {
            question: "How much wood do you need to make a Tool Cupboard?",
            answers: ["500", "1000", "750", "100"],
            correctAnswerIndex: 1,
        },
        {
            question:
                "How many metal fragments are needed for a Sheet Metal Door?",
            answers: ["125", "100", "200", "150"],
            correctAnswerIndex: 3,
        },
        {
            question: "Which of the monuments is not a save zone?",
            answers: [
                "Outpost",
                "Military Tunnels",
                "Bandit Camp",
                "Large Barn",
            ],
            correctAnswerIndex: 1,
        },
        {
            question: "Which of the monuments is a save zone?",
            answers: [
                "Airfield",
                "Harbor",
                "Large Fishing Village",
                "Launch Site",
            ],
            correctAnswerIndex: 2,
        },
        {
            question: "How many locked crates are there on the ship?",
            answers: ["3", "2", "4", "1"],
            correctAnswerIndex: 0,
        },
        {
            question: "How many locked crates are there on a small oil rig?",
            answers: ["2", "1", "4", "3"],
            correctAnswerIndex: 1,
        },
        {
            question: "How many locked crates are there on a large oil rig?",
            answers: ["0", "4", "2", "1"],
            correctAnswerIndex: 3,
        },
        {
            question: "How many workbenches are there?",
            answers: ["4", "7", "3", "10"],
            correctAnswerIndex: 2,
        },
        {
            question: "From which monument can you buy a boat?",
            answers: [
                "Fishing Villages",
                "Water Treatment Plant",
                " Train Yard",
                " Oxum’s Gas Station",
            ],
            correctAnswerIndex: 0,
        },
        {
            question: "From which monument can you buy a Minicopter?",
            answers: ["Satellite Dish", "Outpost", "Airfield", "Bandit Camp"],
            correctAnswerIndex: 3,
        },
        {
            question: "With which tools can you get wood?",
            answers: ["Hammer", "Rock", "Jackhammer", "Torch"],
            correctAnswerIndex: 1,
        },
        {
            question: "With which tools can you get stone?",
            answers: [
                "Camera",
                "Handmade Fishing Rod",
                "Stone Hatchet",
                "Stone Pickaxe",
            ],
            correctAnswerIndex: 3,
        },
        {
            question:
                "How many metal fragments are needed for a Sheet Metal Double Door?",
            answers: ["190", "250", "200", "300"],
            correctAnswerIndex: 2,
        },
        {
            question: "How much scrap is a single minicopter worth?",
            answers: ["750", "1250", "650", "850"],
            correctAnswerIndex: 0,
        },
        {
            question:
                "How much scrap is a single Scrap Transport Helicopter worth?",
            answers: ["750", "1250", "650", "850"],
            correctAnswerIndex: 1,
        },
        {
            question: "How many Military Crates are there on the Dome?",
            answers: ["5", "2", "3", "4"],
            correctAnswerIndex: 3,
        },
        {
            question:
                "How many Heavy Scientists come to the Small Oil Rig when The Locked Crate is released?",
            answers: ["8", "9", "6", "7"],
            correctAnswerIndex: 2,
        },
        {
            question:
                "How many Heavy Scientists come to the Large Oil Rig when The Locked Crate is released?",
            answers: ["10", "12", "14", "11"],
            correctAnswerIndex: 0,
        },
        {
            question: "How many Scientist is there on the Small Oil Rig?",
            answers: ["20", "17", "16", "14"],
            correctAnswerIndex: 2,
        },
        {
            question: "How many Scientist is there on the Large Oil Rig?",
            answers: ["23", "30", "26", "27"],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the name of the fastest horse in the game?",
            answers: [
                "White Thoroughbred",
                "Black Thoroughbred",
                "Buckskin",
                "Dapple Grey",
            ],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the name of the fastest horse in the game?",
            answers: [
                "White Thoroughbred",
                "Black Thoroughbred",
                "Buckskin",
                "Dapple Grey",
            ],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the name of the fastest horse in the game?",
            answers: [
                "White Thoroughbred",
                "Black Thoroughbred",
                "Buckskin",
                "Dapple Grey",
            ],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the name of the fastest horse in the game?",
            answers: [
                "White Thoroughbred",
                "Black Thoroughbred",
                "Buckskin",
                "Dapple Grey",
            ],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the name of the fastest horse in the game?",
            answers: [
                "White Thoroughbred",
                "Black Thoroughbred",
                "Buckskin",
                "Dapple Grey",
            ],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the name of the fastest horse in the game?",
            answers: [
                "White Thoroughbred",
                "Black Thoroughbred",
                "Buckskin",
                "Dapple Grey",
            ],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the name of the fastest horse in the game?",
            answers: [
                "White Thoroughbred",
                "Black Thoroughbred",
                "Buckskin",
                "Dapple Grey",
            ],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the name of the fastest horse in the game?",
            answers: [
                "White Thoroughbred",
                "Black Thoroughbred",
                "Buckskin",
                "Dapple Grey",
            ],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the name of the fastest horse in the game?",
            answers: [
                "White Thoroughbred",
                "Black Thoroughbred",
                "Buckskin",
                "Dapple Grey",
            ],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the name of the fastest horse in the game?",
            answers: [
                "White Thoroughbred",
                "Black Thoroughbred",
                "Buckskin",
                "Dapple Grey",
            ],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the name of the fastest horse in the game?",
            answers: [
                "White Thoroughbred",
                "Black Thoroughbred",
                "Buckskin",
                "Dapple Grey",
            ],
            correctAnswerIndex: 0,
        },
        {
            question: "What is the name of the fastest horse in the game?",
            answers: [
                "White Thoroughbred",
                "Black Thoroughbred",
                "Buckskin",
                "Dapple Grey",
            ],
            correctAnswerIndex: 0,
        },
        // Add more questions here
    ];

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
                    </Routes>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
