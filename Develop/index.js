// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        // TODO need to give a user an option of licenses to choose from
        type: 'input',
        message: 'Please select one of the following license options appropriate for your project?',
        name: 'license',
    },   
    {
        type: 'input',
        message: 'What languages and or frameworks were used?',
        name: 'techFeatures',
    },   
    {
        // TODO understand how to show a test of application
        type: 'input',
        message: 'please provide a test code snippet of application',
        name: 'test',
    },         
     ])
     .then((res) => {
         console.log(res)
     })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    userQuestions();
}

// Function call to initialize app
init();
