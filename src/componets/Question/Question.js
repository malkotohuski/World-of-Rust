import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import "./Question.css";

const Question = ({ question, questionIndex, randomQuestions }) => {
    const navigate = useNavigate();

    const { question: questionText, answers, correctAnswerIndex } = question;

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [reachedAmount, setReachedAmount] = useState("");
    const GameOver = "GAME OVER !";

    if (question > 16) {
        setReachedAmount("OMG u doned !!!");
    }

    useEffect(() => {
        setSelectedAnswer(null); // Reset selected answer when the question changes
    }, [questionIndex]);

    const handleAnswerClick = (index) => {
        setSelectedAnswer(index);

        if (gameOver) {
            setGameOver(false); // Reset the game over state when the answer is clicked again
            setReachedAmount(""); // Clear the reached amount message
            return;
        }

        if (index === correctAnswerIndex) {
            setTimeout(() => {
                const nextQuestionIndex = questionIndex + 1;
                if (nextQuestionIndex < randomQuestions.length) {
                    navigate(`/question/${nextQuestionIndex + 1}`);
                    if (nextQuestionIndex + 1 === 6) {
                        setReachedAmount(
                            "Great, you've reached your first sure amount!"
                        );
                    } else if (nextQuestionIndex + 1 === 11) {
                        setReachedAmount(
                            "'great, you reached the second certain amount'"
                        );
                    } else {
                        setReachedAmount("");
                    }
                } else {
                    navigate("/game-over");
                }
            }, 1500);
        } else {
            setGameOver(true);
            setReachedAmount("");
        }
        navigate(`/question/${questionIndex + 1}`);
    };

    const getAnswerClassName = (index) => {
        if (selectedAnswer !== null) {
            if (index === correctAnswerIndex) {
                return selectedAnswer === index ? "answer-correct" : "";
            } else if (index === selectedAnswer) {
                return "answer-incorrect";
            }
        }
        return "";
    };

    return (
        <div className="question-page-container">
            <div className="question-container">
                {reachedAmount && (
                    <div className="reached-amount-container">
                        <p className="reached-amount-text">{reachedAmount}</p>
                    </div>
                )}
                <div className="question-tables">
                    <h2 className="question-text">{questionText}</h2>
                    <ul className="answer-list">
                        {answers.map((answer, index) => (
                            <li
                                key={index}
                                className={`answer-item ${getAnswerClassName(
                                    index
                                )}`}
                                onClick={() => handleAnswerClick(index)}
                            >
                                <span className="answer-index">
                                    {String.fromCharCode(65 + index)}:
                                </span>{" "}
                                {answer}
                            </li>
                        ))}
                    </ul>
                </div>
                {gameOver && selectedAnswer !== correctAnswerIndex && (
                    <div className="game-over-container">
                        <p className="game-over-text">{GameOver}</p>
                        <button
                            className="restart-button"
                            onClick={() => navigate("/question")}
                        >
                            Restart
                        </button>
                    </div>
                )}
            </div>
            <QuestionTable
                currentQuestionIndex={questionIndex + 1}
                totalQuestions={randomQuestions.length}
                correctAnswerIndex={correctAnswerIndex}
                setSelectedAnswer={setSelectedAnswer} // Pass the setSelectedAnswer function
            />
        </div>
    );
};

const QuestionTable = ({
    currentQuestionIndex,
    totalQuestions,
    correctAnswerIndex,
    setSelectedAnswer, // Receive setSelectedAnswer prop
}) => {
    const [helpUsed, setHelpUsed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate(); // Use the useNavigate hook
    const currentQuestion = parseInt(location.pathname.split("/").pop(), 10);

    const sums = {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 1000,
        7: 2000,
        8: 3000,
        9: 5000,
        10: 10000,
        11: 25000,
        12: 50000,
        13: 100000,
        14: 250000,
        15: 500000,
    };

    const handleEliminateClick = () => {
        // Handle the logic for starting the game here
        // You can use the gameRules state to access the entered rules
        // Example: Navigate to the question page
    };

    const handlerClickCallTeam = () => {
        if (!helpUsed) {
            setHelpUsed(true);
            setSelectedAnswer(correctAnswerIndex);

            setTimeout(() => {
                const nextQuestionIndex = currentQuestionIndex;
                if (nextQuestionIndex < totalQuestions - 1) {
                    navigate(`/question/${nextQuestionIndex + 1}`);
                } else {
                    navigate("/game-over");
                }
            }, 1500);
        }
    };

    const handlerClickHelp = () => {
        // Handle the logic for starting the game here
        // You can use the gameRules state to access the entered rules
        // Example: Navigate to the question page
    };

    return (
        <div className="game-field">
            <table className="question-table">
                <tbody>
                    {[...Array(totalQuestions)].map((_, index) => {
                        const questionNumber = totalQuestions - index;
                        const isActive = currentQuestion === questionNumber;
                        const isReachedAmount =
                            questionNumber === 5 || questionNumber === 10;

                        const questionRowClass = isActive
                            ? "question-row active"
                            : "question-row";
                        const questionNumberClass = isReachedAmount
                            ? "question-number reached-amount"
                            : "question-number";

                        return (
                            <tr
                                key={questionNumber}
                                className={questionRowClass}
                            >
                                <td className="question-sum">
                                    {sums[questionNumber]}
                                </td>
                                <td className={questionNumberClass}>
                                    <Link to={`/question/${questionNumber}`}>
                                        {questionNumber}
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="jokers">
                <button className="remove-two" onClick={handleEliminateClick}>
                    50:50
                </button>

                <button
                    className="help-group"
                    onClick={handlerClickCallTeam}
                    disabled={helpUsed} // Disable the button once help is used
                >
                    Call
                </button>

                <button
                    className="call-team"
                    onClick={() => handlerClickHelp()}
                >
                    ^^^
                </button>
            </div>
        </div>
    );
};

export default Question;
