
const questions = [
    {
        question: "Name something you do before going to bed",
        answers: [
            { text: "Brush Teeth", points: 10 },
            { text: "Set Alarm", points: 8 },
            { text: "Read", points: 6 },
            { text: "Watch TV", points: 4 },
            { text: "Watch TV", points: 4 },
            { text: "Watch TV", points: 4 }
        ]
    },
    {
        question: "Name something you take with you to the beach",
        answers: [
            { text: "Towel", points: 10 },
            { text: "Sunscreen", points: 8 },
            { text: "Swimsuit", points: 6 },
            { text: "Sunglasses", points: 4 },
            { text: "Watch TV", points: 4 },
            { text: "Watch TV", points: 4 }
        ]
    },
    {
        question: "Name a popular pizza topping",
        answers: [
            { text: "Pepperoni", points: 10 },
            { text: "Mushrooms", points: 8 },
            { text: "Cheese", points: 6 },
            { text: "Olives", points: 4 },
            { text: "Watch TV", points: 4 }
        ]
    },
    {
        question: "Name a popular pizza topping",
        answers: [
            { text: "Pepperoni", points: 10 },
            { text: "Mushrooms", points: 8 },
            { text: "Cheese", points: 6 },
            { text: "Olives", points: 4 },
            { text: "Watch TV", points: 4 }
        ]
    }
];

let currentQuestionIndex = 0;
let totalScore = 0;

const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const scoreDisplay = document.getElementById("score");
const nextButton = document.getElementById("next-btn");
const wrongButton = document.getElementById("wrong-btn");
const wrongEffectContainer = document.getElementById("wrong-effect-container");
const wrongEffectImg = document.getElementById("wrong-effect-img");

const dingSound = new Audio("correct.mp3");
const buzzSound = new Audio("x.mp3");

function loadQuestion() {
    answersContainer.innerHTML = "";

    // Check if all questions are answered
    if (currentQuestionIndex >= questions.length) {
        container.innerHTML = `
            <h1>Game Over!</h1>
            <p>Your final score is: <span id="final-score">${totalScore}</span></p>
            <button id="play-again">Play Again</button>
        `;
        document.getElementById("play-again").addEventListener("click", () => {
            location.reload();
        });
        return;
    }

    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById("progress-bar").style.width = `${progress}%`;

    // Get current question
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Create answer boxes
    currentQuestion.answers.forEach((answer, index) => {
        let div = document.createElement("div");
        div.classList.add("answer-box", "hidden");
        div.textContent = `Answer ${index + 1}`;
        div.dataset.points = answer.points;

        div.addEventListener("click", function () {
            if (div.classList.contains("hidden")) {
                div.textContent = `${answer.text} (${answer.points} pts)`;
                div.classList.remove("hidden");
                totalScore += answer.points;
                scoreDisplay.textContent = totalScore;

                // Trigger confetti
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });

                // Play ding sound
                dingSound.play();
            }
        });

        answersContainer.appendChild(div);
    });

    // Hide "Next Question" button for last question
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }

    // Ensure "Wrong" button is visible
    wrongButton.style.display = "inline-block";
}

// Load first question
loadQuestion();

// Handle "Next Question" button
nextButton.addEventListener("click", function () {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
});

// Handle "Wrong" button
wrongButton.addEventListener("click", function () {
    // Play buzz sound
    buzzSound.play();

    // Show the wrong symbol
    wrongEffectContainer.style.display = "block";
    wrongEffectImg.style.opacity = "1";

    // Hide it after 1 second
    setTimeout(() => {
        wrongEffectImg.style.opacity = "0";
        setTimeout(() => {
            wrongEffectContainer.style.display = "none";
        }, 500);
    }, 1000);
});

