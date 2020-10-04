const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type:'input',
        name:'title',
        message: `List your project's title:`
    },
    {
        type:'input',
        name:'badge-link',
        message:'List desired badge links:'
    },
    {
        type:'input',
        name:'project-description',
        message: 'Describe your project:'
    },
    {
        type:'input',
        name:'install',
        message:'List installation instructions:'
    },
    {
        type:'input',
        name:'usage',
        message:`Describe the project's usage:`
    },
    {
        type:'input',
        name:'licensing',
        message:`List the licensing for the project:`
    },
    {
        type:'input',
        name:'contributors',
        message:'List members who contributed to the project:'
    },
    {
        type:'input',
        name:'test',
        message:'Provide project tests:'
    },
    {
        type:'input',
        name:'userInfo',
        message:`What's your Github username?`
    },
    {
        type:'input',
        name:'repoLink',
        message:`Insert your repository link:`
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();