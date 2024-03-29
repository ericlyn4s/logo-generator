// Include the necessary packages for this repository
const inquirer = require('inquirer');
const fs = require('fs');

// Include the JS file that runs the SVG file generation method
const generateLogo = require('./utils.js');
// Creating an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: "What's your logo name? (Maximum 3 characters)",
        // Add a validation function that limits user input to 3 characters
        validate: validateLength
    },
    {
        text: 'input',
        name: 'textColor',
        message: "What color would you like your text to be?",
    },
    // Limit shape choices to three - circle, triangle or square
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want your logo to be?',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be?',
    },
];

// Create a function to initialize application
function init() {
    inquirer
    .prompt(questions)
    // The user input data is passed into the generative function
    .then((data) => {
        fs.writeFileSync('logo.svg', generateLogo({
            ...data
        }))
    })
}

// Create a function to validate the text input for the logo doesn't exceed 3 characters
function validateLength(answer) {
    return answer.length <= 3;
  }

// Function call to initialize app
init();