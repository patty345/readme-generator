// Generates markdown for README file
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  
  ## Github URL 🌐
   [${data.github}](https://github.com/${data.github}/)

   ## Description 📝

   ${data.description}

   ## Table of Contents 🗓

   * [Installation](#dependencies)

   * [Usage](#usage)

   ${renderLicenseLink(data.license)}

   * [Credits](#credits)
  
  ## Instalation 
  
  To install the dependencies for this repository run the following commands:

  \`\`\`
  ${data.dependencies}
  \`\`\`

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  `;
}
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return(`\n* [License](#license)\n`)
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return(`## License Copyright © ${license}. All rights reserved. 
      
    Licensed under the ${license} license.`)
  }
  return ''
}




module.exports = generateMarkdown;
