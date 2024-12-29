// Variables to store current question, correct answer, and XP
let currentQuestion = '';
let correctAnswer = 0;
let currentQuestionNumber = 1; // To track question number
let xp = 0; // Experience points

// Function to generate a random math question
function generateQuestion() {
    // Randomly choose an operation: addition, subtraction, multiplication, or division
    const operations = ['+', '-', '×', '÷'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    // Randomly generate two numbers for the math problem
    const num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    const num2 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10

    // Generate question and answer based on the operation
    switch (operation) {
        case '+':
            currentQuestion = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
            break;
        case '-':
            currentQuestion = `${num1} - ${num2}`;
            correctAnswer = num1 - num2;
            break;
        case '×':  // Use '×' for multiplication
            currentQuestion = `${num1} × ${num2}`;
            correctAnswer = num1 * num2;
            break;
        case '÷':  // Use '÷' for division
            // Ensure division is valid (num1 is divisible by num2)
            currentQuestion = `${num1 * num2} ÷ ${num2}`;
            correctAnswer = num1;
            break;
    }

    // Display the question and the question number
    document.getElementById('question').textContent = `Question ${currentQuestionNumber}: What is ${currentQuestion}?`;
    document.getElementById('answer-input').value = ''; // Clear the input field
    document.getElementById('feedback').textContent = ''; // Clear any feedback

    // Increment question number for next question
    currentQuestionNumber++;
}

// Function to check the user's answer and give XP
function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value;
    const feedback = document.getElementById('feedback');

    // Debugging: Log the current question number and answer
    console.log('Current Question Number:', currentQuestionNumber);
    console.log('User Answer:', userAnswer);

    
    if (userAnswer === "420691337") {
        console.log("Redirecting to bumble.html!"); // Debugging log
        window.location.replace('bumble.html');  // Redirect to bumble.html
        return;  // Prevent further processing after redirect
    }

    // Check for correct answer
    if (parseFloat(userAnswer) === correctAnswer) {
        xp += 10; // Award 10 XP for a correct answer
        feedback.textContent = 'Correct! Well done.';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = `Oops! The correct answer is ${correctAnswer}.`;
        feedback.style.color = 'red';
    }

    // Update XP display
    document.getElementById('xp').textContent = xp;

    // Proceed to the next question after checking the answer
    setTimeout(generateQuestion, 1000); // Wait 1 second before generating the next question
}

// Event listeners for the buttons
window.onload = function() {
    // Initialize the first question when the page loads
    generateQuestion();

    // Attach event listeners to the buttons
    document.getElementById('submit-answer-btn').addEventListener('click', checkAnswer);
    document.getElementById('next-question-btn').addEventListener('click', generateQuestion);
};
