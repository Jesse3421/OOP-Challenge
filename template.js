//const employeeArr = require('./index')


function buildTeam(employeeArr) {
    for(i = 0; i > employeeArr.length; i++) {
        let team = []
        listArr= []
        let role = employeeArr[i].getRole()
        console.log(role)
        let additionalData = ''

        if(role === 'Manager'){
            additionalData = employeeArr[i].officeNumber
            return additionalData
        } else if(role === 'Intern'){
            additionalData = employeeArr[i].school
        } else if(role === 'Engineer') {
            additionalData = employeeArr[i].github 
        } else {
            console.log('The role does not exist')
        }
        console.log(additionalData)
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
    listArr.push(team, +1)
    console.log(listArr)
    }
    return team
}


function generatePage(employeeArr) {
console.log(employeeArr)


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
    ${buildTeam.team}
    </div>
</body>
<script>
</html>`

}


module.exports = generatePage; 