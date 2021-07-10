// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

    case "GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    default:
      return "";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  return `[![License](https://img.shields.io/badge/License-${license})](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${license} license`;
  }
  return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  
  ## Installation
  ${data.usage}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  
  ## How to Contribute
  ${data.contributions}
  
  ## Tests
  ${data.tests}
  
  
  `;
}

module.exports = generateMarkdown;

// if (!license) {
//   return "";
// }
// return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;

// ${renderLicenseLink(data.license)}