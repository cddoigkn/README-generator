// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type:'input',
    name:'name',
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
    name:'licenses',
    message:'What licenses will your project use?',
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

// TODO: Create a function to write README file
function writeToFile(README, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
