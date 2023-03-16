// Packages needed for this project
const inquirer = require('inquirer')
const generateMarkdown = require('./util/generateMarkdown')
const fs = require('fs');

// The array of questions for user input for the readme file
const readmeQuestions = [
    {
        type: 'input',
        message: 'What is the title of your README?',
        name:   'title'
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List your collaborators, if you used any third-party assets that require attribution',
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
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('./util/README.md', readmeAnswers, (error) =>
//         error ? console.log('An error has occured and the Markdown file was not created') : console.log('You have successfully created the README.md file')
//     )
// }

// The function that will initialize project
const init = () => {
    return inquirer.prompt(readmeQuestions)
        .then((readmeAnswers) => {
            const fileCreate = generateMarkdown(readmeAnswers)
            fs.writeFile('./util/README.MD', fileCreate, (error) =>
            error ? console.log('An error has occured and the Markdown file was not created') : console.log('You have successfully created the README.md file')
            )
            return readmeAnswers
        })
        .catch ((error) => {
            console.log(error)
        })
}

// Function call to initialize project
init();
