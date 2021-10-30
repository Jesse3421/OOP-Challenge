const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")
const path = require("path")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Employee = require("./lib/Employee")
const { choices } = require("yargs")
const generatePage = require("./template.js")
const employeeArr = []
//const generatePage = require("./src/template.html")
//import classes (manager, intern, engineer) 


const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's id number?"
        },
        {   type: "input",
            name: "email",
            message: "What is your manager's email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's office number?"
        },
    ])
}
//prompt the user to either chose between engineer/intern or pick third option which should generate a manager
const promptPositions = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "positions",
            message: "Would you like to add any of the following positions?",
            choices: ["engineer", "intern", "OR finish building your team"] 
        }
    ])
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineers's id number?"
        },
        {   type: "input",
            name: "email",
            message: "What is your engineers's email address?"
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your github username"
        }
    ])
    .then(({name, id, email, github}) => {
        const engineer = new Engineer(name, id, email, github)
        employeeArr.push(engineer)
        console.log(employeeArr)
        promptPositions()
    })
    }


const promptIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your interns's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your interns's id number?"
        },
        {   type: "input",
            name: "email",
            message: "What is your interns's email address?"
        },
        {
            type:"input",
            name: "school",
            message: "What school is the intern attending?"
        }
    ])
    .then(({name, id, email, school}) => {
        const intern = new Intern(name, id, email, school)
        employeeArr.push(intern)
        console.log(employeeArr)
        promptPositions()
    })
}

managerPrompt()
    .then(({name, id, email, officeNumber}) => {
        const manager = new Manager(name, id, email, officeNumber)
        employeeArr.push(manager)
        console.log(employeeArr)
    })    
    .then(promptPositions) 
    .then(answers => {
        
        console.log(answers)
            if(answers.positions === "engineer") {
                return promptEngineer()
            } else if(answers.positions == "intern"){
                return promptIntern()
            } else {
            return 
            }
    })
    .then(generatePage = employeeArr => {
        
        const pageHTML = generatePage(employeeArr)
        fs.writeFile('./index.html', pageHTML, err => {
            if (err) throw new Error(err)
            console.log("Check out your new list of employees in the index.html file in the directory")
        })
        
    })

    
    
        
    

    