// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    type:'input',
    name:'title',
    message:'What is the title of your project?',
  },
  {
    type:'input',
    name:'description',
    message:'What is the description of your project?',
  },
  {
    type:'input',
    name:'install',
    message:'How do you install this project?',
  },
  {
    type:'input',
    name:'usage',
    message:'How will your project be used?',
  },
  {
    type:'list',
    name:'license',
    message:'What licenses will your project use?',
    choices: ["MIT", "choice 2", "choice 3", "Blank"]
  },
  {
    type:'input',
    name:'contributors',
    message:'Who all contributed to your project?',
  },
  {
    type:'input',
    name:'tests',
    message:'What tests were ran on this project?',
  },
  {
    type:'input',
    name:'questions',
    message:'If you have any questions, send me an email at:',
  },
];
function startQuestions (){
inquirer.prompt(questions)
.then(function(responses){
  const str = generateMarkdown(responses)

  writeToFile("README.md", str)
})
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if( error ) console.log("!")
  })
}

// TODO: Create a function to initialize app
function init() {
  startQuestions()
}

// Function call to initialize app
init();
