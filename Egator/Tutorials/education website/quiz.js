const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const alertBox = document.querySelector('.alert');
const timer = document.querySelector('.timer');

const quiz = [
    {
        question: "Q. Which programming language is primarily used for web development?",
        choices: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "Q. Which programming language is known for its simplicity and readability?",
        choices: ["Java", "C#", "Python", "Ruby"],
        answer: "Python"
    },
    {
        question: "Q. Which programming language is most commonly used for Android app development?",
        choices: ["Swift", "Kotlin", "JavaScript", "Ruby"],
        answer: "Kotlin"
    },
    {
        question: "Q. Which programming language is primarily used for iOS app development?",
        choices: ["Swift", "Kotlin", "Objective-C", "Java"],
        answer: "Swift"
    },
    {
        question: "Q. Which programming language is known for its performance and system-level programming?",
        choices: ["Python", "JavaScript", "C++", "PHP"],
        answer: "C++"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 15;
let timerID = null;

const showQuestions = () => {
    if (currentQuestionIndex >= quiz.length) {
        showScore();
        return;
    }

    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = "";
    questionDetails.choices.forEach(choice => {
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = choice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
            choiceDiv.classList.add('selected');
        });
    });

    startTimer();
    nextBtn.style.display = "block"; // Ensure the "Next" button is visible during the quiz
};

const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (selectedChoice && selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        displayAlert("Correct Answer");
        score++;
    } else {
        displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
    }
    timeLeft = 15;
    currentQuestionIndex++;
    showQuestions();
};

const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
    displayAlert("You have completed the quiz!");
    nextBtn.textContent = "Play Again";
    nextBtn.style.display = "block";
    quizOver = true;
    stopTimer();
    timer.style.display = "none";
};

const displayAlert = (msg) => {
    alertBox.style.display = "block";
    alertBox.textContent = msg;
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 2000);
};

const startTimer = () => {
    clearInterval(timerID);
    timer.textContent = timeLeft;
    timer.style.display = "flex";

    const countDown = () => {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            displayAlert("Time Up!");
            timeLeft = 15;
            currentQuestionIndex++;
            showQuestions();
        }
    };
    timerID = setInterval(countDown, 1000);
};

const stopTimer = () => {
    clearInterval(timerID);
};

const shuffleQuestions = () => {
    for (let i = quiz.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }

    currentQuestionIndex = 0;
    showQuestions();
};

const startQuiz = () => {
    score = 0;
    currentQuestionIndex = 0;
    quizOver = false;
    timeLeft = 15;
    nextBtn.textContent = "Next";
    nextBtn.style.display = "none";
    scoreCard.textContent = "";
    timer.style.display = "flex";
    shuffleQuestions();
};

nextBtn.addEventListener('click', () => {
    if (quizOver) {
        startQuiz();
    } else {
        const selectedChoice = document.querySelector('.choice.selected');
        if (!selectedChoice) {
            displayAlert("Select your answer");
            return;
        }
        checkAnswer();
    }
});

// Start the quiz initially
startQuiz();
