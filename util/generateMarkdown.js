// Renders the appropriate licnese badge depending on the license chossen by the user during the CLI input
const renderLicenseBadge = (license) => {
 const licenseBadges = {
    'None': ' ',
    'Apache License 2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    'GNU General Public License v3.0': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'MIT License' :'![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'BSD 2-Clause "Simplified" License' : '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)',
    'BSD 3-Clause "New" or "Revised" License' : '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
    'Boost Softwae License 1.0' : '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)',
    'Creative Commons Zero v1.0 Universal' : '![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)',
    'Eclipse Public License 2.0' : '![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)',
    'GNU Affero General Public License v3.0' : '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)',
    'GNU General Public License v2.0' : '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)',
    'GNU Lesser General Public License v2.1' : '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)',
    'Mozilla Public License 2.0' : '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)',
    'The Unlicense' : '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
  }
  return licenseBadges[license]
}

// Renders the appropriate licnese badge depending on the license chossen by the user during the CLI input
const renderLicenseLink = (license) => {
  const licenseLinks = {
    'None': ' ',
    'Apache License 2.0': '(https://opensource.org/licenses/Apache-2.0)',
    'GNU General Public License v3.0': '(https://www.gnu.org/licenses/gpl-3.0)',
    'MIT License' :'(https://opensource.org/licenses/MIT)',
    'BSD 2-Clause "Simplified" License' : '(https://opensource.org/licenses/BSD-2-Clause)',
    'BSD 3-Clause "New" or "Revised" License' : '(https://opensource.org/licenses/BSD-3-Clause)',
    'Boost Softwae License 1.0': '(https://www.boost.org/LICENSE_1_0.txt)',
    'Creative Commons Zero v1.0 Universal' : '(http://creativecommons.org/publicdomain/zero/1.0/)',
    'Eclipse Public License 2.0' : '(https://opensource.org/licenses/EPL-2.0)',
    'GNU Affero General Public License v3.0' : '(https://www.gnu.org/licenses/agpl-3.0)',
    'GNU General Public License v2.0' : '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    'GNU Lesser General Public License v2.1' : '(https://www.gnu.org/licenses/lgpl-2.1)',
    'Mozilla Public License 2.0' : '(https://opensource.org/licenses/MPL-2.0)',
    'The Unlicense' : '(http://unlicense.org/)'
  }
  return licenseLinks[license]
}

// Renders the appropriate licnese badge depending on the license chossen by the user during the CLI input
const renderLicenseSection = (license) => {
  if(license === 'None') {
    return `This project does not have a license attached.`
  }
  else {
    return `This project is Licensed under the ${license} license. For more information on the license click the following link. ${renderLicenseLink(license)}`
  }
}

// Generate the README.md from the CLI input
const generateMarkdown = (data) =>{
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Content
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Testing
${data.testing}

## Questions

Any questions regarding this project can be directed to: \n
EMail me at:
${data.email}\n

My Github username:
${data.githubName}

`;
}

module.exports = generateMarkdown;
