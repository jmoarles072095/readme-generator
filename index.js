const fs = require("fs");
const inquirer = require("inquirer");
const generateMD = require("./generateReadme.js")
const { questions } = require("./questions")

inquirer.prompt(questions).then(function(response) {
    const myReadme = generateMD(response);
    // console.log(response);
    // console.log(myPage);
    fs.writeFile("README.md", myReadme, function(err) {
        if (err) {
            return console.log(err)
        }
    })
})