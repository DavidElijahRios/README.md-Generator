// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const userQuestions = () => {
     return inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectName',
    },  
    {
        type: 'input',
        message: 'What was your motivation to build this project?',
        name: 'descriptionA',
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'descriptionB',
    },   
    {
        type: 'input',
        message: 'What did you learn from this project?',
        name: 'descriptionC',
    },   
    {
        type: 'input',
        message: 'What were the installation steps?',
        name: 'installation',
    },   
    {
        type: 'input',
        message: 'Give a brief step by step instruction of how to use your application?',
        name: 'usage',
    }, 
    {
        type: 'input',
        message: 'Please list all who collaborated on the project',
        name: 'collaborationA',
    },   
    {
        type: 'input',
        message: 'Please list any third-party assets used for the project',
        name: 'collaborationB',
    },   
    {
        type: 'list',
        message: 'Please select one of the following license options appropriate for your project?',
        choices: ['MIT License', 'GNU GPLv3', 'None'],
        name: 'license',
    },   
    {
        type: 'input',
        message: 'What languages and or frameworks were used?',
        name: 'techFeatures',
    },   
    {
        type: 'input',
        message: 'Were there any test to provide?',
        name: 'test',
    },         
     ]);   
};

// TODO: Create a function to initialize app
function init() {
    userQuestions()
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully generated README.md file!! Yay!!!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
