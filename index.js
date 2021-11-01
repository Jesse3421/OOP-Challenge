const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")
const path = require("path")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Employee = require("./lib/Employee")
const { choices } = require("yargs")
const buildTeam = require("./template.js")

const OUTPUT_DIR = path.resolve(__dirname, "Results");
const outputPath = path.join(OUTPUT_DIR, "employeeList.html")


const employeeArr = []


//const generatePage = require("./src/template.html")
//import classes (manager, intern, engineer) 

//This is the initial set of prompts to the user
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
    .then((answers) => {
        
        console.log(answers)
            if(answers.positions === "engineer") {
                return promptEngineer()
            } else if(answers.positions == "intern"){
                return promptIntern()
            } else {
            return  employeeArr
            }
    })
}
//This is the prompt to get user data and generate Engineer class
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

//This is prompt to get user info and generate the Intern class
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
        promptPositions(employeeArr) 
        .then(writeFile)
    })

function writeFile(employeeArr) {  
       const pageHTML = buildTeam(employeeArr)
       fs.writeFileSync(outputPath, pageHTML, "utf-8");
}


   
  

    
        
    

    