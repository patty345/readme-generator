// Generates markdown for README file
function generateMarkdown(data) {
  return `# ${data.title} ${renderBadge(data.license)}
  
  ## Github URL 🌐
   [${data.github}](https://github.com/${data.github}/)

   ## Description 📝

   ${data.description}

   ## Table of Contents 🗓

   * [Installation](#dependencies)

   * [Usage](#usage)

   ${renderLink(data.license)}

   * [Credits](#credits)
  
  ## Instalation 
  
  To install the dependencies for this repository run the following commands:

  \`\`\`
  ${data.dependencies}
  \`\`\`

  ## Usage

  `;
}
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README


module.exports = generateMarkdown;
