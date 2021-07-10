// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genMarkdown = require("./utils/generateMarkdown.js");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a Description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "Enter installation requirements for your project",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter Usage for your project",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter Contributions for your project",
    name: "contributions",
  },
  {
    type: "input",
    message: "Enter Tests for your project",
    name: "tests",
  },
  {
    type: "input",
    message: "Enter Credits for your project",
    name: "credits",
  },
  {
    type: "list",
    message: "What license would you like yo use?",
    name: "license",
    choices: [
      "MIT",
      "ISC",
      "GPLv3",
      {
        name: "No Licence",
        value: "",
      },
    ],
  },
];

// inquirer
//   .prompt([

//   ])
//   .then((answers)=> {
//     fs.writeFile('README.md', (answers, null, 4), (err) =>
//     err ? console.error(err) : console.log('Success!'))
//   });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("./sample/README.md", genMarkdown({ ...answers }));
  });
}

// Function call to initialize app
init();
