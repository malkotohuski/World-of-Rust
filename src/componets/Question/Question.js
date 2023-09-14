import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import "./Question.css";

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

const Question = ({ question, questionIndex, randomQuestions }) => {
    const navigate = useNavigate();

    const { question: questionText, answers, correctAnswerIndex } = question;

    const [helpVisible, setHelpVisible] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [reachedAmount, setReachedAmount] = useState("");
    const GameOver = "GAME OVER !";

    const [hiddenAnswers, setHiddenAnswers] = useState([]);
    const [eliminateUsed, setEliminateUsed] = useState(false);
    const [callHelp, setCallHelp] = useState(false); // Define callHelp state

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
        setSelectedAnswer(index);
        resetEliminate();
        if (gameOver) {
            setGameOver(false);
            setReachedAmount("");
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
        navigate(`/question/${questionIndex + 1}`);
    };

    const getAnswerClassName = (index) => {
        if (selectedAnswer !== null) {
            if (index === correctAnswerIndex) {
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

            // Optionally, you can set a timeout to hide the help div
            setTimeout(() => {
                setHelpVisible(false);
            }, 3000); // 30 seconds
        }
        setHelpVisible(!helpVisible);
    };

    return (
        <div className="question-page-container">
            <div className="question-container">
                {reachedAmount && (
                    <div className="reached-amount-container">
                        <p className="reached-amount-text">{reachedAmount}</p>
                    </div>
                )}
                {helpVisible && <HelpDiv />}

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
                setHiddenAnswers={setHiddenAnswers}
                setSelectedAnswer={setSelectedAnswer}
                gameOver={gameOver}
                selectedAnswer={selectedAnswer}
                answers={answers}
                eliminateUsed={eliminateUsed}
                setEliminateUsed={setEliminateUsed}
                helpVisible={helpVisible}
                handleHelpClick={handlerClickHelp}
                callHelp={callHelp}
            />
        </div>
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
    setEliminateUsed, // Receive the 'setEliminateUsed' prop
    handleHelpClick, // Receive the click handler for help
    callHelp,
}) => {
    const [helpUsed, setHelpUsed] = useState(false);
    const [halfHelp, setHalfHelp] = useState(false);

    const [eliminationsUsed, setEliminationsUsed] = useState(0);
    const location = useLocation();
    const navigate = useNavigate(); // Use the useNavigate hook
    const currentQuestion = parseInt(location.pathname.split("/").pop(), 10);
    const maxEliminations = 4;

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
        if (!halfHelp) {
            setHalfHelp(true);
            if (!gameOver && selectedAnswer === null && !eliminateUsed) {
                const incorrectAnswers = answers
                    .map((answer, index) => ({
                        answer,
                        index,
                    }))
                    .filter((item) => item.index !== correctAnswerIndex);

                // Shuffle the incorrect answers
                const shuffledIncorrectAnswers = shuffleArray(incorrectAnswers);

                // Select two incorrect answers to eliminate
                const eliminatedAnswers = [
                    shuffledIncorrectAnswers[0].index,
                    shuffledIncorrectAnswers[1].index,
                ];

                // Include the eliminated answer indices in hiddenAnswers
                setHiddenAnswers(eliminatedAnswers);

                // Increment the eliminationsUsed counter
                setEliminationsUsed(eliminationsUsed + 1);

                // Check if all eliminations are used, and if so, reset hiddenAnswers
                if (eliminationsUsed + 1 === maxEliminations) {
                    // Reset hiddenAnswers here if needed
                }

                // Set eliminateUsed to true to prevent further use
                setEliminateUsed(true);
            }
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

            // Hide the HelpDiv after 5 seconds
        }
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
                    disabled={helpUsed} // Disable the button once help is used
                >
                    Call
                </button>

                <button
                    className="call-team"
                    onClick={handleHelpClick} // Use handleHelpClick instead of handlerClickHelp
                    disabled={callHelp}
                >
                    ^^^
                </button>
            </div>
        </div>
    );
};

export default Question;
