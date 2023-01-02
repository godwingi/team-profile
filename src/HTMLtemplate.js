// const fs = require('fs');
function generateHtml(team) {
    // console.log(team)
const cards = []

for(i=0; i < team.length; i++) {
if(team[i].getRole() === 'Manager') {
    var managerCard = `<div class="card bg-light mb-3 placement" style="max-width: 18rem;">
  <div class="card-header">Manager</div>
  <div class="card-body">
  <p><span>Name: </span>${team[i].name}</p>
  <p><span>ID: </span>${team[i].id}</p>
  <p><span>E-mail: </span><a href="mailto:${team[i].email}" target="_blank" rel="noopener noreferrer">${team[i].email}</a></p>
  <p><span>Office Number: </span>${team[i].officeNumber}</p>
  </div>
</div>`
 cards.push(managerCard)
}

if(team[i].getRole() === 'Engineer') {
    var engineerCard = `<div class="card bg-light mb-3 placement" style="max-width: 18rem;">
  <div class="card-header">Engineer</div>
  <div class="card-body">
  <p><span>Name: </span>${team[i].name}</p>
    <p><span>ID: </span>${team[i].id}</p>
    <p><span>E-mail: </span><a href="mailto:${team[i].email}" target="_blank" rel="noopener noreferrer">${team[i].email}</a></p>
    <p><span>Github Username: </span> <a href="https://github.com/${team[i].github}">${team[i].github}</a></p>
  </div>
</div>`
 cards.push(engineerCard)
}

if(team[i].getRole() === 'Intern') {
    var internCard = `<div class="card bg-light mb-3 placement" style="max-width: 18rem;">
    <div class="card-header">Intern</div>
    <div class="card-body">
    <p><span>Name: </span>${team[i].name}</p>
    <p><span>ID: </span>${team[i].id}</p>
    <p><span>E-mail: </span><a href="mailto:${team[i].email}" target="_blank" rel="noopener noreferrer">${team[i].email}</a></p>
    <p><span>School Name: </span>${team[i].school}</p>
    </div>
  </div> `
 cards.push(internCard)
}

}
var html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<header class="alert alert-primary title" role="alert">
 Meet the team!
</header>
<body>
    ${cards}
</body>
</html>`

return html

}

module.exports = generateHtml;