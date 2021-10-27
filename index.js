const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")
const path = require("path")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Employee = require("./lib/Employee")
const employeeArr = []
//const generatePage = require("./src/template.html")
//import classes (manager, intern, engineer) 

function createProfile(){

}

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

const promptEnineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Please enter your github username"
        }
    ])
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type:"input",
            name: "school",
            message: "What school is the intern attending?"
        }
    ])
}

managerPrompt()
    .then(answers => {
        const manager = new Manager(answers)
        console.log(manager)




        //const promptData = promptPositions(answers).positions 
        //console.log(promptData)
    })
    //      switch (promptData){
    //      case "engineer":
    //          return Engineer
    //          break
    //     case "intern":
    //         return Intern
    //         break
    //     case "OR finish building your team":
    //         return Manager
    //         break
    //         default: 
    //         console.log("Please choose one of the options")
    //         promptPositions()
    //      }
    //     console.log(promptData)
    // })
    

   // const manager = new Manager(response.mangerName, response. managerID...)
// employees.push(manager)
// call switch case function to direct traffic

module.exports = createProfile