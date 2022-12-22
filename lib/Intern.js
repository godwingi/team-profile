const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) { //to get github username
        this.school = school
    }

getSchool() {
    return this.school
}
getRole() {
    return 'Intern'
    }
}
