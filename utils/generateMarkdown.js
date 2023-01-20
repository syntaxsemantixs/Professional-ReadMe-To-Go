// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`

  }else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
    if(license !== "None") {
      return `- [License](#license)`

    }else {
      return ``
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None") {
    return `## License
    This application is covered by the ${license} license.`

  }else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}


  ## Description:
  ${data.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
  - [Questions](#questions)
  ## Installation:
  ${data.installation}
  ## Usage:
  [Video](${data.usage})

  ${renderLicenseSection(data.license)}

  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.testing}
  ## Additional Info:
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}
  ## Questions:
  ${data.questions}

`;
}
// ## Licensing:
//   [![license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io)

// ## License:
// ${data.license}

module.exports = generateMarkdown;
