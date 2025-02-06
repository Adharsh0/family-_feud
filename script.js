
const questions = [
    {
        question: "What's something you shouldn't do at a funeral?",
        answers: [
            { text: "Show up in a bright Hawaiian shirt.", points: 30 },
            { text: "Laugh at the wrong moment.", points: 25 },
            { text: "Ask, 'So, what's for lunch?'", points: 20 },
            { text: "Yawn loudly and check your watch.", points: 15 },
            { text: "Take a selfie with the coffin.", points: 10 },
            { text: "Say, 'He owed me money!'", points: 5 }
        ]
    },
    {
        question: "Most loved Kerala foods",
        answers: [
            { text: "Kerala Biriyani", points: 30 },
            { text: "Sadya", points: 25 },
            { text: "Parotta-curry", points: 20 },
            { text: "Puttu-kadala", points: 15 },
            { text: "Payasam", points: 10 },
            { text: "Appam-stew", points: 5 }
        ]
    },
    {
        question: "Name 6 horcruxes in the Harry Potter series",
        answers: [
            { text: "Nagini (Voldemort’s Snake)", points: 30 },
            { text: "Tom Riddle’s Diary", points: 25 },
            { text: "Marvolo Gaunt’s Ring", points: 20 },
            { text: "Harry Potter (by accident)", points: 15 },
            { text: "Salazar Slytherin’s Locket", points: 15 },
            { text: "Helga Hufflepuff’s Cup", points: 10 },
            { text: "Rowena Ravenclaw’s Diadem", points: 10 }
        ]
    },
    {
        question: "Name of different Harry Potter series",
        answers: [
            { text: "Harry Potter and the Philosopher’s Stone", points: 35 },
            { text: "Harry Potter and the Chamber of Secrets", points: 30 },
            { text: "Harry Potter and the Prisoner of Azkaban", points: 25 },
            { text: "Harry Potter and the Goblet of Fire", points: 20 },
            { text: "Harry Potter and the Order of the Phoenix", points: 15 },
            { text: "Harry Potter and the Half-Blood Prince", points: 10 },
            { text: "Harry Potter and the Deathly Hallows", points: 5 }
        ]
    },
    {
        question: "What's the worst thing to say on a first date?",
        answers: [
            { text: "'Can you pay? I forgot my wallet.'", points: 30 },
            { text: "'You remind me of my ex!'", points: 25 },
            { text: "'Do you believe in love at first sight?'", points: 20 },
            { text: "'So, how much do you weigh?'", points: 15 },
            { text: "'I googled you before this… interesting stuff!'", points: 10 },
            { text: "'You look just like my mom/dad!'", points: 5 }
        ]
    },
    {
        question: "What's something every Malayalam horror movie has?",
        answers: [
            { text: "A sudden power cut at the scariest moment.", points: 30 },
            { text: "A ghost with long, messy hair.", points: 25 },
            { text: "A background score that makes you jump.", points: 20 },
            { text: "An abandoned tharavadu (ancestral house).", points: 15 },
            { text: "A priest chanting loudly before getting thrown across the room.", points: 10 },
            { text: "A twist ending that makes no sense.", points: 5 }
        ]
    },
    {
        question: "What's an obvious sign of a one-sided crush?",
        answers: [
            { text: "You send paragraphs, they reply with 'Hmm.'", points: 30 },
            { text: "They leave you on 'read' all the time.", points: 25 },
            { text: "Only one person starts the conversation.", points: 20 },
            { text: "They never remember your birthday.", points: 15 },
            { text: "They only text when they need something.", points: 10 },
            { text: "They say 'You're like a sibling to me.'", points: 5 }
        ]
    },
    {
        question: "What's something you can say on the beach and at the dining hall?",
        answers: [
            { text: "'It's too hot in here!'", points: 30 },
            { text: "'Pass the salt!'", points: 25 },
            { text: "'This place is packed!'", points: 20 },
            { text: "'That was delicious!'", points: 15 },
            { text: "'I need a drink.'", points: 10 },
            { text: "'Let's find a good spot.'", points: 5 }
        ]
    },
    {
        question: "What's the most cringe-worthy thing you can do on Instagram?",
        answers: [
            { text: "Share your food every time you eat out.", points: 30 },
            { text: "Post too many selfies in a row.", points: 25 },
            { text: "Overuse filters until you look unrecognizable.", points: 20 },
            { text: "Post a 'just woke up' photo looking flawless.", points: 15 },
            { text: "Tag your location when you're just in your room.", points: 10 },
            { text: "Post motivational quotes with no context.", points: 5 }
        ]
    },
    {
        question: "What’s something everyone does on Instagram but pretends they don’t?",
        answers: [
            { text: "Stalk people’s profiles secretly.", points: 30 },
            { text: "Compare followers count with others.", points: 25 },
            { text: "Edit their photos before posting.", points: 20 },
            { text: "Like old photos from years ago.", points: 15 },
            { text: "Check if someone’s read your message.", points: 10 },
            { text: "Take 100 selfies to post one.", points: 5 }
        ]
    },
    {
        question: "What’s something you always forget to bring to class?",
        answers: [
            { text: "Water bottle", points: 30 },
            { text: "Assignment", points: 25 },
            { text: "Textbook", points: 20 },
            { text: "Notebook", points: 15 },
            { text: "Pen", points: 10 },
            { text: "ID card", points: 5 }
        ]
    },
    {
        question: "What’s something you find in every engineer’s bag?",
        answers: [
            { text: "Headphones", points: 30 },
            { text: "Calculator", points: 25 },
            { text: "Laptop", points: 20 },
            { text: "Notebooks", points: 15 },
            { text: "Charger", points: 10}
        ]
    },
    {
        question: "What's the first thing you do when you wake up?",
        answers: [
            { text: "Turn off the alarm", points: 30 },
            { text: "Check your phone", points: 25 },
            { text: "Brush your teeth", points: 20 },
            { text: "Stretch, wipe eyes", points: 15 },
            { text: "Drink water", points: 10 },
            { text: "Look for coffee", points: 5 }
        ]
    },
    {
        question: "What's something people do when they're bored?",
        answers: [
            { text: "Do some online shopping", points: 30 },
            { text: "Scroll through social media", points: 25 },
            { text: "Daydream", points: 20 },
            { text: "Eat snacks", points: 15 },
            { text: "Text friends", points: 10 },
            { text: "Take a nap", points: 5 }
        ]
    },
    {
        question: "What's the worst thing to happen during a Zoom meeting?",
        answers: [
            { text: "Wi-Fi disconnects", points: 30 },
            { text: "Someone forgets to mute", points: 25 },
            { text: "Camera freezes on a weird face", points: 20 },
            { text: "Everyone talks at the same time", points: 15 },
            { text: "Background noise is louder than the speaker", points: 10 },
            { text: "Unmuting yourself and saying something embarrassing", points: 5 }
        ]
    },
    {
        question: "Mohanlal's latest flop movies",
        answers: [
            { text: "Marakkar: Arabikadalinte Simham", points: 30 },
            { text: "Aaraattu", points: 25 },
            { text: "Monster", points: 20 },
            { text: "Alone", points: 15 },
            { text: "Malaikottai Vaaliban", points: 10 },
            { text: "Barroz", points: 5 }
        ]
    },
    {
        question: "What's the most common excuse for being late to a meeting or event?",
        answers: [
            { text: "Woke up late", points: 30 },
            { text: "Traffic", points: 25 },
            { text: "My phone alarm didn’t go off", points: 20 },
            { text: "Weather was bad", points: 15 },
            { text: "I got lost", points: 10 },
            { text: "Couldn't find parking", points: 5 }
        ]
    },
    {
        question: "Name a reason people go to the gym.",
        answers: [
            { text: "To overcome breakup/rejection", points: 30 },
            { text: "To lose weight", points: 25 },
            { text: "To stay healthy", points: 20 },
            { text: "To build muscle", points: 15 },
            { text: "To relieve stress", points: 10 },
            { text: "To socialize", points: 5 }
        ]
    },
    {
        question: "Things you can say to your mother but probably not your father:",
        answers: [
            { text: "Mom, can you make me something to eat?", points: 30 },
            { text: "Mom, don't tell Dad...", points: 25 },
            { text: "To convince father", points: 20 },
            { text: "I need some money..", points: 15 },
            { text: "Can you do my laundry?", points: 10 },
            { text: "I love you more than Dad", points: 5 }
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

