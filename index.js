// TODO: Include packages needed for this application
const generateMarkdown = require('./generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'Project Title',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Provide a short description explaining the what, why, and how of your project:',
    },
    {
      type: 'input',
      name: 'Table of Contents:',
      message: 'Add a table of contents to make it easy for users to find what they need.',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed:',
    },
    {
      type: 'input',
      name: 'Credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section:',
    },
    {
      type: 'list',
      name: 'License',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'],
    },
    {
    type: 'input',
    name: 'Test',
    message: 'How can users run tests for your project?',
  },
  {
  type: 'input',
  name: 'Questions',
  message: 'Provide your GitHub username.',
},
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Successfully created ${fileName}`);
        }
      });
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers); 
        writeToFile('README.md', readmeContent);
      });
    
}

// Function call to initialize app
init();
