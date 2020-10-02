let questions = [
    // use inquirer to prompt users with questions
    // array of questions
    {
        type: "input",
        name: "Title",
        message: "What is your projects title? "

    },
    {
        type: "input",
        name: "Description",
        message: "What is your project about "
    },
    {
        type: "input",
        name: "Installation",
        message: "What technologies/packages have to be installed to run project? "
    },
    {
        type: "input",
        name: "Usage",
        message: "How is your project used? "
    },
    {
        type: "checkbox",
        name: "License",
        message: "Lincenses used? ",
        choices: ["MIT", "MINE", "YES"]
    },
    {
        type: "input",
        name: "Contribuitions",
        message: "Who contritubted in the creation of this project?"

    },
    {
        type: "input",
        name: "Test",
        message: "What is needed to run a successful test?"

    },
    {
        type: "input",
        name: "Github",
        message: "What is Github username?"

    },
    {
        type: "input",
        name: "Email",
        message: "What is your email?",

    },
]

// export questions into index.js via export
module.exports = {
    questions: questions
}