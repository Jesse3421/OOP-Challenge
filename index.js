const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")
const path = require("path")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Employee = require("./lib/Employee")
const { choices } = require("yargs")
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
const promptPositions = answers => {
    console.log(answers)
    return inquirer.prompt([
        {
            type: "list",
            name: "positions",
            message: "Would you like to add any of the following positions?",
            choices: ["engineer", "intern", "OR finish building your team"] 
        }
    ])
    .then(answers => {
        if(answers.choices == "engineer") {
            return promptEngineer(answers)
        } else if(answers.choices == "intern"){
            return promptIntern(answers)
        } else {
        return answers  
        }
    })
}

const promptEngineer = (answers) => {
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Please enter your github username"
        }
    ])
}

const promptIntern = (answers) => {
    return inquirer.prompt([
        {
            type:"input",
            name: "school",
            message: "What school is the intern attending?"
        }
    ])
}

managerPrompt()    
    .then(promptPositions) 
    .then (answers => {
        console.log(answers)
        
    })

    //.then(({name, id, email, officeNumber}) => {
      //  this.manager = new Manager(name, id, email, officeNumber)
        //console.log(this.manager)
        //employeeArr.push(this.manager)
        //console.log(employeeArr)
      //  .then(({name, id, email, officeNumber}) => {
       //     this.employee = new Employee(name, id, email, officeNumber)
        //    console.log(this.employee)
        //})


    

        //const promptData = promptPositions(answers).positions 
        //console.log(promptData)
    
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

/*const position = answers.positions
        console.log(position)
            switch (position){
                case "engineer":
                    console.log("engineer was chosen")
                    promptEngineer(answers)
                    this.position = new Engineer(position)
                    console.log(this.position)
                break
                case "intern":
                    console.log("intern was chosen")
                break
                case "OR finish building your team":
                    return answers
                    
                default:
                    console.log("this didn't work")
            } */