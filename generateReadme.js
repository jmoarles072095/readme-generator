function generateMD(response) {
    return `        # ${response.Title}
    
    
    ## Description
        ${response.Description}
 
        ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Test](#test)
        * [Contributors](#contributors)
        * [Questions](#questions)

    ## Installation
        ${response.Installation}
    ## Usage
        ${response.Usage}
    
    ## License
        Lincenses used: ${response.License}
    ## Test
        ${response.Test}
    ## Contributors
        ${response.Contribuitions}
    ## Questions
    GitHub: https://github.com/${response.Github}\n
    Contact Me: ${response.Email}
    `

}
// export function into index.js
module.exports = generateMD;