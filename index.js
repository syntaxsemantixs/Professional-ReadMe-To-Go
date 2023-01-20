// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js')

    // all names: title, description, installation, instuctions, contribution, testing, license, username, questions
//const gernerateMarkdown = require('./utils/generatedMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [{
    name: 'title',
    type: "input",
    message: 'What is the title of your repository?',
},
{
    name: 'description',
    type: 'input',
    message: 'What is the description of your repository?',
},
{
    name: 'installation',
    type: "input",
    message: 'Please list installation instructions.',
},
{
    name: 'usage',
    type: "input",
    message: 'Please list the usage.',
},
{
    name: 'contribution',
    type: "input",
    message: 'Please explain how other developers may contribute to your project.',
},
{
    name: 'testing',
    type: 'input',
    message: 'Please explain how users may test your application.',
},
{
    name: 'license',
    type: 'list',
    message: 'Please choose a license.',
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    
    // //['GNU AGPLv3', 'GNU GPLv3',
    // 'GNU LGPLv3', 'Mozilla Public License 2.0',
    // 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
    // 'The Unlicense'],
},
{
    name: 'username',
    type: "input",
    message: 'What is your github username ?',
},
{
    name: 'email',
    type: "input",
    message: 'What is your email address?',
},
{
    name: 'questions',
    type: "input",
    message: 'Please list instructions fo those who wish to contact you.',
}
//end of array
];

// for (const s of questions) {
//     console.log(s)
//   }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
	.then(function(answers) {
        console.log(answers)
        writeToFile("README.md", generateMarkdown(answers));
	});}

// Function call to initialize app
init();
