// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'GNU GPLv3':
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      case 'Apache 2.0':
        return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      case 'ISC':
        return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
      default:
        return '';
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    switch (license) {
      case 'MIT':
        return '[MIT License](https://opensource.org/licenses/MIT)';
      case 'GNU GPLv3':
        return '[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)';
      case 'Apache 2.0':
        return '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
      case 'ISC':
        return '[ISC License](https://opensource.org/licenses/ISC)';
      default:
        return '';
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== 'None') {
      return `This project is licensed under the [${license} License](${renderLicenseLink(license)}).`;
    }
    return '';
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseSection = renderLicenseSection(data.license);
    return `# ${data['Project Title']}
    ${licenseBadge}
  
  ${data.Description}
  
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [License](#License)
  - [Test](#Test)
  - [Questions](#Questions)
  
  ## Installation
  ${data.Installation}
  
  ## Usage
  ${data.Usage}
  
  ## Credits
  ${data.Credits}
  
  ## License
  ${licenseSection}
  
  ## Test
  ${data.Test}
  
  ## Questions
  For questions, you can reach me on GitHub: [${data.Questions}](https://github.com/${data.Questions})
  
  `;
  }
  
  module.exports = generateMarkdown;
  