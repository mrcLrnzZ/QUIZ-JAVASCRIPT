const questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'Hyper Text Markup Language', correct: true },
            { text: 'Home Tool Markup Language', correct: false },
            { text: 'Hyperlinks and Text Markup Language', correct: false },
            { text: 'Hyper Text Making Language', correct: false }
        ]
    },
    {
        question: 'Who is making the Web standards?',
        answers: [
            { text: 'Mozilla', correct: false },
            { text: 'Microsoft', correct: false },
            { text: 'Google', correct: false },
            { text: 'The World Wide Web Consortium', correct: true }
        ]
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        answers: [
            { text: '<heading>', correct: false },
            { text: '<h6>', correct: false },
            { text: '<h1>', correct: true },
            { text: '<head>', correct: false }
        ]
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        answers: [
            { text: '<br>', correct: true },
            { text: '<lb>', correct: false },
            { text: '<break>', correct: false },
            { text: '<b>', correct: false }
        ]
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        answers: [
            { text: '<body bg="yellow">', correct: false },
            { text: '<background>yellow</background>', correct: false },
            { text: '<body style="background-color:yellow;">', correct: true },
            { text: '<body style="bgcolor:yellow;">', correct: false }
        ]
    },
    {
        question: 'Choose the correct HTML element to define important text',
        answers: [
            { text: '<strong>', correct: true },
            { text: '<b>', correct: false },
            { text: '<i>', correct: false },
            { text: '<important>', correct: false }
        ]
    },
    {
        question: 'Choose the correct HTML element to define emphasized text',
        answers: [
            { text: '<i>', correct: false },
            { text: '<em>', correct: true },
            { text: '<italic>', correct: false },
            { text: '<b>', correct: false }
        ]
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        answers: [
            { text: '<a>http://www.example.com</a>', correct: false },
            { text: '<a href="http://www.example.com">Example</a>', correct: true },
            { text: '<a url="http://www.example.com">Example</a>', correct: false },
            { text: '<a link="http://www.example.com">Example</a>', correct: false }
        ]
    },
    {
        question: 'Which character is used to indicate an end tag?',
        answers: [
            { text: '*', correct: false },
            { text: '<', correct: false },
            { text: '/', correct: true },
            { text: '^', correct: false }
        ]
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        answers: [
            { text: '<a href="url" new>', correct: false },
            { text: '<a href="url" target="_blank">', correct: true },
            { text: '<a href="url" target="new">', correct: false },
            { text: '<a href="url" target="new_tab">', correct: false }
        ]
    },
    {
        question: 'Which of these elements are all <table> elements?',
        answers: [
            { text: '<table><tr><tt>', correct: false },
            { text: '<table><tr><td>', correct: true },
            { text: '<table><tr><td><th>', correct: false },
            { text: '<table><head><tfoot>', correct: false }
        ]
    },
    {
        question: 'How can you make a numbered list?',
        answers: [
            { text: '<ul>', correct: false },
            { text: '<ol>', correct: true },
            { text: '<dl>', correct: false },
            { text: '<list>', correct: false }
        ]
    },
    {
        question: 'How can you make a bulleted list?',
        answers: [
            { text: '<ul>', correct: true },
            { text: '<ol>', correct: false },
            { text: '<dl>', correct: false },
            { text: '<list>', correct: false }
        ]
    },
    {
        question: 'What is the correct HTML for making a text input field?',
        answers: [
            { text: '<input type="text">', correct: true },
            { text: '<textfield>', correct: false },
            { text: '<textinput>', correct: false },
            { text: '<input type="textfield">', correct: false }
        ]
    },
    {
        question: 'What is the correct HTML for making a drop-down list?',
        answers: [
            { text: '<input type="dropdown">', correct: false },
            { text: '<input type="list">', correct: false },
            { text: '<select>', correct: true },
            { text: '<list>', correct: false }
        ]
    },
    {
        question: 'What is the correct HTML for making a checkbox?',
        answers: [
            { text: '<input type="checkbox">', correct: true },
            { text: '<check>', correct: false },
            { text: '<checkbox>', correct: false },
            { text: '<input type="check">', correct: false }
        ]
    },
    {
        question: 'What is the correct HTML for making a text area?',
        answers: [
            { text: '<input type="textarea">', correct: false },
            { text: '<textarea>', correct: true },
            { text: '<input type="textbox">', correct: false },
            { text: '<textbox>', correct: false }
        ]
    },
    {
        question: 'What is the correct HTML for inserting an image?',
        answers: [
            { text: '<img src="image.gif" alt="MyImage">', correct: true },
            { text: '<image src="image.gif" alt="MyImage">', correct: false },
            { text: '<img href="image.gif" alt="MyImage">', correct: false },
            { text: '<img alt="MyImage">image.gif</img>', correct: false }
        ]
    },
    {
        question: 'What is the correct HTML for inserting a background image?',
        answers: [
            { text: '<body bg="background.gif">', correct: false },
            { text: '<body style="background-image:url(background.gif)">', correct: true },
            { text: '<background img="background.gif">', correct: false },
            { text: '<body background="background.gif">', correct: false }
        ]
    },
    {
        question: 'What does the <a> tag stand for?',
        answers: [
            { text: 'Audio', correct: false },
            { text: 'Address', correct: false },
            { text: 'Anchor', correct: true },
            { text: 'Aside', correct: false }
        ]
    },
    {
        question: 'What does the <abbr> tag define?',
        answers: [
            { text: 'Acronym', correct: false },
            { text: 'Abbreviation', correct: true },
            { text: 'Address', correct: false },
            { text: 'Attribute', correct: false }
        ]
    },
    {
        question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
        answers: [
            { text: 'alt', correct: true },
            { text: 'title', correct: false },
            { text: 'src', correct: false },
            { text: 'longdesc', correct: false }
        ]
    },
    {
        question: 'Which HTML element is used to specify a footer for a document or section?',
        answers: [
            { text: '<footer>', correct: true },
            { text: '<bottom>', correct: false },
            { text: '<section>', correct: false },
            { text: '<article>', correct: false }
        ]
    },
    {
        question: 'Which HTML element is used to specify a header for a document or section?',
        answers: [
            { text: '<top>', correct: false },
            { text: '<header>', correct: true },
            { text: '<head>', correct: false },
            { text: '<section>', correct: false }
        ]
    },
    {
        question: 'What does the <table> tag define?',
        answers: [
            { text: 'A row in a table', correct: false },
            { text: 'A table header', correct: false },
            { text: 'A table', correct: true },
            { text: 'A cell in a table', correct: false }
        ]
    },
    {
        question: 'Which HTML element defines navigation links?',
        answers: [
            { text: '<nav>', correct: true },
            { text: '<navigation>', correct: false },
            { text: '<navigate>', correct: false },
            { text: '<navig>', correct: false }
        ]
    },
    {
        question: 'Which HTML attribute is used to define inline styles?',
        answers: [
            { text: 'styles', correct: false },
            { text: 'font', correct: false },
            { text: 'class', correct: false },
            { text: 'style', correct: true }
        ]
    },
    {
        question: 'How do you add a comment in HTML?',
        answers: [
            { text: '<!-- This is a comment -->', correct: true },
            { text: '// This is a comment', correct: false },
            { text: '/* This is a comment */', correct: false },
            { text: '<This is a comment>', correct: false }
        ]
    },
    {
        question: 'What is the correct HTML for creating a frame?',
        answers: [
            { text: '<iframe>', correct: true },
            { text: '<frame>', correct: false },
            { text: '<frameset>', correct: false },
            { text: '<iframe src="page.html">', correct: true }
        ]
    },
    {
        question: 'SINO PINAKA POGI?',
        answers: [
            { text: 'GILLIAN', correct: true },
            { text: 'MARC', correct: true },
            { text: 'M.', correct: true },
            { text: 'LORENZO', correct: true }
        ]
    }
];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft;
let timer;
let answered = false; 
const userAnswers = []; 

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const timerElement = document.getElementById('time');
const resultElement = document.getElementById('result');
const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.disabled = true;
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    resultElement.innerText = '';
    timerElement.innerText = timeLeft;
    timer = setInterval(updateTimer, 1000);
    showQuestion();

    
}

function showQuestion() {

    if (currentQuestionIndex >= questions.length) {
        endQuiz(); // end pag wala na question
        return;
    }
    answered = false;

    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.innerText = answer.text;
        button.classList.add('btn');
        button.dataset.correct = answer.correct;
        button.dataset.index = index; 
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });

    // pagnakasagot na user disable button
    const userAnswer = userAnswers[currentQuestionIndex];
    if (userAnswer) {
        for (const button of answerButtonsElement.children) {
            button.disabled = true;
            button.classList.add(button.dataset.index == userAnswer.answerIndex ? (userAnswer.correct ? 'correct' : 'wrong') : (button.dataset.correct === 'true' ? 'correct' : 'wrong'));
        }
        answered = true;
    }

    updateNextButton();
}

function selectAnswer(event) {
    answered = true;
    const selectedButton = event.target;
    const answerIndex = selectedButton.dataset.index;
    const correct = selectedButton.dataset.correct === 'true';

    
    userAnswers[currentQuestionIndex] = {
        questionIndex: currentQuestionIndex,
        answerIndex: answerIndex,
        correct: correct
    };

    for (const button of answerButtonsElement.children) {
        button.disabled = true;
        button.classList.add(button.dataset.correct === 'true' ? 'correct' : 'wrong');
    }

    updateNextButton();
}

function updateTimer() {
    timeLeft--;
    timerElement.innerText = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        endQuiz();
        
    }
}

function endQuiz() {
    clearInterval(timer);
    calculateScore();
    resultElement.innerText = 'Quiz over! You scored ' + score + ' out of ' + questions.length;
}


function calculateScore() {
    score = userAnswers.reduce((total, answer) => total + (answer.correct ? 1 : 0), 0);
}

nextButton.addEventListener('click', () => {
    if (!answered) return; // di maneenxt pag di sinagutan
    currentQuestionIndex++;
    showQuestion();
   
});

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
        answered = true;
        updateNextButton();
    }
});


function updateNextButton() {
    nextButton.disabled = !answered;
}


