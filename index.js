// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer.propmt([
    {
        type: 'input',
        message: 'What is the title of your README?',
        name:   'title'
    },
    {
        type: 'input',
        message: 'Enter the description',
        name: 'description',
    }
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
