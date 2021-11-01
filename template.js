//const employeeArr = require('./index')
const team = []
const listArr = []
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Employee = require("./lib/Employee")

function buildTeam(employeeArr) {

    console.log(employeeArr)
    function generateManager(manager) {
         return `</div>
         <ul class="list group list-group-flush">
         <li class="list-group-item"> Manager </li>
         <li class="list-group-item"> Name: ${manager.getName()} </li>
         <li class="list-group-item"> Id: ${manager.getId()} </li> 
         <li class="list-group-item"> Email: ${manager.getEmail()} </li>
         <li class="list-group-item"> Office Number: ${manager.getOfficeNumber()} </li>
         </ul>
         </div>
         </div>`
    }

    function generateEngineer(engineer) {
         return `</div>
    <ul class="list group list-group-flush">
    <li class="list-group-item"> Engineer </li>
    <li class="list-group-item"> Name: ${engineer.getName()} </li>
    <li class="list-group-item"> Id: ${engineer.getId()} </li> 
    <li class="list-group-item"> Email: ${engineer.getEmail()} </li>
    <li class="list-group-item"> Github Username: ${engineer.getGithub()} </li>
    </ul>
    </div>
    </div>`
    }

    function generateIntern(intern) {
     return   `</div>
    <ul class="list group list-group-flush">
    <li class="list-group-item"> Intern </li>
    <li class="list-group-item"> Name: ${intern.getName()} </li>
    <li class="list-group-item"> Id: ${intern.getId()} </li> 
    <li class="list-group-item"> Email: ${intern.getEmail()} </li>
    <li class="list-group-item"> School: ${intern.getSchool()} </li>
    </ul>
    </div>
    </div>`
    }

    const listArr = []
    listArr.push(employeeArr.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)))

    listArr.push(employeeArr.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join(""))

    listArr.push(employeeArr.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join(""))

    return listArr.join("")
}

module.exports = employeeArr => {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>   
    </head>
    <body>
        <div class="" id="">
        ${buildTeam(employeeArr)}
        </div>
    </body>
    </html>
    `

}

