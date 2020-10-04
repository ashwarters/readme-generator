const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios').default;
const generate = require('./utils/generateMardown')


// array of questions for user
const questions = [
    {
        type:'input',
        name:'title',
        message: `List your project's title:`
    },
    {
        type:'input',
        name:'badgeLink',
        message:'List desired badge links:'
    },
    {
        type:'input',
        name:'projectDescription',
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
inquirer
    .prompt(questions)
    .then(function(data){
        const answersURL = `https://api.github.com/users/${data.userInfo}`;

        axios.get(answersURL).then(function(res){
            const githubData ={
                githubAvatar:res.data.avatar_url,
                githubEmail: res.data.email,
                githubProfile: res.data.html_url,
                githubName: res.data.name
            };
        fs.writeFile('README.md', generate(data.githubData), function(err){
            if (err){
                throw err;
            };
            console.log('README.md successfully created!');
        });
        });
});

// function to initialize program
function init() {

}

// function call to initialize program
init();