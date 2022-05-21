// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if(license === "MIT License") {
     return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
   } else if (license === "GNU GPLv3") {
     return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
   } else if (license === "Eclipse Public License 1.0") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
   } else if (license === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
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

function renderTestSection(test) {
  if (test === "") {
    return ""
  } else {
    return `## Tests


    ${test}
    

    
    `
  }
}

function renderTestLink(test) {
    if(test === ""){
      return ""
    } else {
      return "- [Tests](#tests)"
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
  - [Features](#features)
  ${renderTestLink(data.test)}
  - [Questions](questions)


  
  ## Installation
  

  ${data.installation}
  



  ## Usage
  

  ${data.usage}
<!-- Please add your link of images, screenshots, Gifs, etc. below  -->
  <!-- [alt text](assets/images/screenshot.png) -->




  ## Credits
  

  ${data.collaborationA}
  ${data.collaborationB}




 ${renderLicenseSection(data.license)}




  ## Features

  
  ${data.techFeatures}




  ${renderTestSection(data.test)}
  



  ## Questions


  GitHub: [${data.GitHub}](https://github.com/${data.GitHub})


  Please Feel free to contact me at ${data.Email} if you have any questions.

  
  `;
}
// TODO: add questions section that links to git hub profile and also email address

module.exports = generateMarkdown;
