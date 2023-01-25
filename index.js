// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "project",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is you email address?"
    },
    {
        type: "input",
        name: "motivation",
        message: "What was your motivation?"
    },
    {
        type: "input",
        name: "build",
        message: "Why did you build the project?"
    },
    {
        type: "input",
        name: "solved",
        message: "What problem does the project solve?"
    },
    {
        type: "input",
        name: "learn",
        message: "What did you learn through this project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required for installing your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions for usage."
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators and resources."
    },
    {
        type: "list",
        name: "license",
        message: "Choose which license used from list.",
        choices: ["MIT", "Microsoft Public", "IBM", "Mozilla Public"]
    },
    {
        type: "input",
        name: "features",
        message: "List project features."
    },
    {
        type: "input",
        name: "tests",
        message: "Write tests for project and explain how to run them."
    }
  
];

function renderLicenseLink(license) {
    const badges = new questions.license().getBadges();
  
  switch(badges) {
      case "MIT":
         `[![MIT](https://img.shields.io/badge/HollieSundra/ReadMe.svg)]`
         break;  
      case "Microsoft Public":
          `[![License: MPL 2.0](https://img.shields.io/badge/HollieSundra/ReadMe.svg)]`
          break;
      case "IBM":
          `[![License: IPL 1.0](https://img.shields.io/badge/HollieSundra/ReadMe.svg)]`
          break;
      case "Mozilla Public":
          `[![License: MPL 2.0](https://img.shields.io/badge/HollieSundra/ReadMe.svg)]`
          break;
      default: 
          console.log("error");
  }
  }

inquirer
.prompt(questions)
.then(answers => {
    createMD(answers);
});

const createMD = data => {
    const template = `# ${data.project}

        
        ## Github Username
        ${data.username}

        ## Email
        ${data.email}

        ## Description
         - ${data.motivation}
         - ${data.build}
         - ${data.solved}
         - ${data.learned}

        ## Table of Contents
         - Installation
         - Usage
         - Credits
         - License
         - Features
         - Tests

        ## Installation
        ${data.installation}
        
        ## Usage
        ${data.usage}

        ## Credits
        ${data.credits}

        ## License
        ${data.license}

        ## Features
        ${data.features}

        ## Tests
        ${data.tests}
        `
    console.log(template);
    fs.writeFile('README.md', template, err => {
     err ? console.log(err) : console.log('Good Job!')
    });
};

