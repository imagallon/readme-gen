// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'name'
    },
    {
      type: 'input',
      message: 'Enter a Description of your project',
      name: 'name'
    },
    {
      type: 'input',
      message: 'Enter installation requirements for your project',
      name: 'name'
    },
    {
      type: 'input',
      message: 'Enter Usage for your project',
      name: 'name'
    },
    {
      type: 'input',
      message: 'Enter Contributions for your project',
      name: 'name'
    },
    {
      type: 'input',
      message: 'Enter Tests for your project',
      name: 'name'
    },
    {
      type: 'list',
      message: 'What license would you like yo use?',
      name: 'method',
      choices: ['email', 'WhatsApp', 'Discord', 'Slack'],
    }
  ])
  .then((answers)=> {
    fs.writeFile('readme.md', JSON.stringify(answers, null, 4), (err) =>
    err ? console.error(err) : console.log('Success!'))
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
