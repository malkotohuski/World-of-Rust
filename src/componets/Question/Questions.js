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
        question: "How many metal fragments are needed for a Sheet Metal Door?",
        answers: ["125", "100", "200", "150"],
        correctAnswerIndex: 3,
    },
    {
        question: "Which of the monuments is not a save zone?",
        answers: ["Outpost", "Military Tunnels", "Bandit Camp", "Large Barn"],
        correctAnswerIndex: 1,
    },
    {
        question: "Which of the monuments is a save zone?",
        answers: ["Airfield", "Harbor", "Large Fishing Village", "Launch Site"],
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

export default questions;
