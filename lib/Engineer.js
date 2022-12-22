const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) { //to get github username
        this.github = github
    }

getGithub() {
    return this.github
}
getRole() {
    return 'Engineer'
    }
}

