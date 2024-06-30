import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import "./Question.css";

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

const HelpDiv = () => {
    const calculateRandomPercentages = () => {
        const letters = ["A", "B", "C", "D"];
        let remainingPercentage = 100;
        const allocatedPercentages = [];

        for (let i = 0; i < letters.length - 1; i++) {
            const randomPercentage = Math.floor(
                Math.random() * (remainingPercentage + 1)
            );
            allocatedPercentages.push(randomPercentage);
            remainingPercentage -= randomPercentage;
        }

        allocatedPercentages.push(remainingPercentage);

        // Shuffle the allocated percentages to randomize the order
        for (let i = allocatedPercentages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allocatedPercentages[i], allocatedPercentages[j]] = [
                allocatedPercentages[j],
                allocatedPercentages[i],
            ];
        }

        return allocatedPercentages;
    };

    const randomPercentages = calculateRandomPercentages();

    return (
        <div className="help-div">
            {randomPercentages.map((percentage, index) => (
                <p key={index} className="help-text">
                    {String.fromCharCode(65 + index)}: {percentage}%
                </p>
            ))}
        </div>
    );
};

const Question = ({ questionIndex, randomQuestions, difficulty }) => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const [helpVisible, setHelpVisible] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [reachedAmount, setReachedAmount] = useState("");
    const GameOver = "GAME OVER !";

    const [hiddenAnswers, setHiddenAnswers] = useState([]);
    const [eliminateUsed, setEliminateUsed] = useState(false);
    const [callHelp, setCallHelp] = useState(false);

    let nextQuestionIndex = questionIndex + 1;

    // Filter questions based on difficulty
    const filterQuestions = useCallback(() => {
        if (questionIndex <= 5) {
            return randomQuestions.filter(q => q.difficulty === "easy");
        } else {
            return randomQuestions.filter(q => q.difficulty === "medium");
        }
    }, [questionIndex, randomQuestions]);

    useEffect(() => {
        const filteredQuestions = filterQuestions();
        setCurrentQuestion(filteredQuestions[questionIndex % filteredQuestions.length]);
    }, [questionIndex, randomQuestions, filterQuestions]);

    const resetEliminate = () => {
        setEliminateUsed(false);
    };

    if (questionIndex > 16) {
        setReachedAmount("OMG u done !!!");
    }

    useEffect(() => {
        setSelectedAnswer(null);
    }, [questionIndex]);

    const handleAnswerClick = (index) => {
        if (gameOver) {
            return;
        }
        setSelectedAnswer(index);
        resetEliminate();

        if (index === currentQuestion.correctAnswerIndex) {
            setTimeout(() => {
                if (nextQuestionIndex < randomQuestions.length) {
                    navigate(`/question/${nextQuestionIndex + 1}`);
                    if (nextQuestionIndex + 1 === 6) {
                        setReachedAmount(
                            "Great, you've reached your first sure amount!"
                        );
                    } else if (nextQuestionIndex + 1 === 11) {
                        setReachedAmount(
                            "Great, you reached the second certain amount"
                        );
                    } else {
                        setReachedAmount("");
                    }
                    setHiddenAnswers([]);
                } else {
                    navigate("/game-over");
                }
            }, 1500);
        } else {
            setGameOver(true);
            setReachedAmount("");
        }
    };

    const getAnswerClassName = (index) => {
        if (selectedAnswer !== null) {
            if (index === currentQuestion.correctAnswerIndex) {
                return selectedAnswer === index ? "answer-correct" : "";
            } else if (index === selectedAnswer) {
                return "answer-incorrect";
            }
        } else if (hiddenAnswers.includes(index)) {
            return "answer-hidden";
        }
        return "";
    };

    const handlerClickHelp = () => {
        if (!callHelp) {
            setCallHelp(true);
            const allocatedPercentages = [];

            const letters = ["A", "B", "C", "D"];
            let remainingPercentage = 100;

            for (let i = 0; i < letters.length - 1; i++) {
                const randomPercentage = Math.floor(
                    Math.random() * (remainingPercentage + 1)
                );
                allocatedPercentages.push(randomPercentage);
                remainingPercentage -= randomPercentage;
            }

            allocatedPercentages.push(remainingPercentage);

            setTimeout(() => {
                setHelpVisible(false);
            }, 15000); // 15 seconds
        }
        setHelpVisible(!helpVisible);
    };

    return (
        currentQuestion && (
            <div className="question-page-container">
                <div className="question-container">
                    {reachedAmount && (
                        <div className="reached-amount-container">
                            <p className="reached-amount-text">{reachedAmount}</p>
                        </div>
                    )}
                    {helpVisible && <HelpDiv />}

                    <div className="question-tables">
                        <h2 className="question-text">{currentQuestion.question}</h2>
                        <ul className="answer-list">
                            {currentQuestion.answers.map((answer, index) => (
                                <li
                                    key={index}
                                    className={`answer-item ${getAnswerClassName(index)}`}
                                    onClick={() => {
                                        handleAnswerClick(index);
                                        setHelpVisible(false);
                                    }}
                                    disabled={gameOver}
                                >
                                    <span className="answer-index">
                                        {String.fromCharCode(65 + index)}:
                                    </span>{" "}
                                    {answer}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {gameOver && selectedAnswer !== currentQuestion.correctAnswerIndex && (
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
                    correctAnswerIndex={currentQuestion.correctAnswerIndex}
                    setHiddenAnswers={setHiddenAnswers}
                    setSelectedAnswer={setSelectedAnswer}
                    gameOver={gameOver}
                    selectedAnswer={selectedAnswer}
                    answers={currentQuestion.answers}
                    eliminateUsed={eliminateUsed}
                    setEliminateUsed={setEliminateUsed}
                    helpVisible={helpVisible}
                    handleHelpClick={handlerClickHelp}
                    callHelp={callHelp}
                    difficulty={currentQuestion.difficulty}
                />
            </div>
        )
    );
};

const QuestionTable = ({
    currentQuestionIndex,
    totalQuestions,
    correctAnswerIndex,
    setHiddenAnswers,
    setSelectedAnswer,
    gameOver,
    selectedAnswer,
    answers,
    eliminateUsed,
    setEliminateUsed,
    handleHelpClick,
    callHelp,
}) => {
    const [helpUsed, setHelpUsed] = useState(false);
    const [halfHelp, setHalfHelp] = useState(false);

    const [eliminationsUsed, setEliminationsUsed] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const currentQuestion = parseInt(location.pathname.split("/").pop(), 10);
    const maxEliminations = 4;

    const handleEliminateClick = () => {
        if (!halfHelp) {
            setHalfHelp(true);
            if (!gameOver && selectedAnswer === null && !eliminateUsed) {
                const incorrectAnswers = answers
                    .map((answer, index) => ({
                        answer,
                        index,
                    }))
                    .filter((item) => item.index !== correctAnswerIndex);

                const shuffledIncorrectAnswers = shuffleArray(incorrectAnswers);

                const eliminatedAnswers = [
                    shuffledIncorrectAnswers[0].index,
                    shuffledIncorrectAnswers[1].index,
                ];

                setHiddenAnswers(eliminatedAnswers);
                setEliminationsUsed(eliminationsUsed + 1);

                if (eliminationsUsed + 1 === maxEliminations) {
                }

                setEliminateUsed(true);
            }
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

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        return shuffledArray;
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

    return (
        <div className="game-field">
            <table className="question-table">
                <tbody>
                    {[...Array(Math.min(totalQuestions, 15))].map(
                        (_, index) => {
                            const questionNumber = index + 1;
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
                                        <Link
                                            to={`/question/${questionNumber}`}
                                        >
                                            {questionNumber}
                                        </Link>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
            <div className="jokers">
                <button
                    className="remove-two"
                    onClick={handleEliminateClick}
                    disabled={halfHelp}
                >
                    50:50
                </button>

                <button
                    className="help-group"
                    onClick={handlerClickCallTeam}
                    disabled={helpUsed}
                >
                    Call
                </button>

                <button
                    className="call-team"
                    onClick={handleHelpClick}
                    disabled={callHelp}
                >
                    ^^^
                </button>
            </div>
        </div>
    );
};

export default Question;
