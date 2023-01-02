const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) { //to get github username
        super(name,id,email)
        this.github = github
    }

getGithub() {
    return this.github
}
getRole() {
    return 'Engineer'
    }
}

module.exports = Engineer;