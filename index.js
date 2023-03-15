// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer.
    prompt([
    {
        type: 'input',
        message: 'What is the title of your README?',
        name:   'title'
    },
    {
        type: 'input',
        message: 'Enter the description of your README.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter the installation requirements.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter a description of the usage.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter the contributing information.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter the testing completed.',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Please enter your EMail.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username',
        name: 'githubName',
    },
    {
        type: 'list',
        message: 'Choose the license that your are using',
        name: 'license',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BDS 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Softwae License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0',  'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    },

]);

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
