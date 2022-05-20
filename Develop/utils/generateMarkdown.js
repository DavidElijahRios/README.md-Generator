// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if(license === "MIT License") {
     return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
   } else if (license === "GNU GPLv3") {
     return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
   } else {
     return ""
   }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
     if(license === "None") {
       return ""
     } else {
       return "- [License](#license)"
     }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  } else {
    return `## License
  License is ${license}
    
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}                          

${renderLicenseBadge(data.license)}

  ## Description
  
   ${data.descriptionA}.
   ${data.descriptionB}.
   ${data.descriptionC}.

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseLink(data.license)}
  
  ## Installation
  
  ${data.installation}.
  

  ## Usage
  
  ${data.usage}.
<!-- Please add your link of images, screenshots, Gifs, etc. below  -->
  [alt text](assets/images/screenshot.png)

  
  ## Credits
  
  ${data.collaborationA}
  ${data.collaborationB}

  
 ${renderLicenseSection(data.license)}

 
  ## Badges
  
 


  ## Features

  
  ${data.techFeatures}.

  
  ## Tests 
  

  ${data.test}.
  
  `;
}

module.exports = generateMarkdown;
