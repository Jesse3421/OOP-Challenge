//const employeeArr = require('./index')
const team = []
const listArr = []
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Employee = require("./lib/Employee")

function buildTeam(employeeArr) {
    employeeArr.forEach(employee => {
        let role = this.employee
        console.log(employee)
        console.log(employee)
        if(role === 'Manager'){
            additionalData = employee.officeNumber
            return renderTeam(additionalData)
        } else if(role === 'Intern'){
            additionalData = employee.school
            return renderTeam(additionalData)
        } else if(role === 'Engineer') {
            additionalData = employee.github
            return renderTeam(additionalData) 
        } else {
            console.log('The role does not exist')
    }
    })
}
  

function renderTeam(additionalData) {
    let team = ''
    let listArr = []
        team = team + `<div class="card" style="width: 18rem;">
                       <div class="card-header">
                       ${role}
                       </div>
                            <ul class="list group list-group-flush">
                            <li class="list-group-item"> ${employeeArr[i].name} </li>
                            <li class="list-group-item"> ${employeeArr[i].id} </li> 
                            <li class="list-group-item"> ${employeeArr[i].email} </li>
                            <li class="list-group-item"> ${additionalData} </li>
                            </ul>
                        </div>
                </div>`
        console.log(team)
        listArr.push(team)
        console.log(listArr)
        }

   



function generatePage(employeeArr) {
console.log(employeeArr)
buildTeam(employeeArr)

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
    ${buildTeam(listArr)}
    </div>
</body>
</html>
`

}


module.exports = generatePage; 

