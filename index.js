// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//*******need to edit to push into README**********
const generateREADME = ({ name, location, github, linkedin }) =>
	//Generatesin ReadMe
	`<title>Info</title>
	</head>
	
	<body>
	  <header>
		<nav class="text-right">
		  <ul>
			<li>${name}</li>
			<li>${location}</li>
			<li><a href="https://github.com/${github}">${github}</li>
			<li><a href="https://www.linkedin.com/in/${linkedin}/">${linkedin}</li>
		  </ul>
		</nav>
		
	</body>
	
	`;

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
    //confirms if there is an installation process
    name: 'confirmInstallation',
    type: "confirm",
    message: 'Is there an installtion process?',
},
{
    name: 'installation',
    type: "input",
    message: 'Please list installtion instructions.',
},
{
    //confirms if there is an installtion process
    name: 'instuctions',
    type: "confirm",
    message: 'Please list instructions for using your application. It is recommended to add descriptive images later as well.',
},
{
    name: 'confirmContribution',
    type: "confirm",
    message: 'May other developers contribute to your repository?',
},
{
    name: 'contribution',
    type: "input",
    message: 'Please explain how other developers may contribute to your project.',
},
{
    //confirms if there is testing available
    name: 'testConfirm',
    type: "confirm",
    message: 'Is testing available?',
},
{
    name: 'testing',
    type: 'input',
    message: 'Please explain how users may test your application.',
},
{
    name: 'license',
    type: 'checkbox',
    message: 'Please choose a license.',
    choices: ['GNU AGPLv3', 'GNU GPLv3',
    'GNU LGPLv3', 'Mozilla Public License 2.0',
    'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
    'The Unlicense'],
},
{
    name: 'username',
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
        writeToFile("README.md", answers);
	});}

// Function call to initialize app
init();
