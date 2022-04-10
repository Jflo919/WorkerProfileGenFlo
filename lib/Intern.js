const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email);
        

        this.role = role;
        //data.school in inquirer?
        this.school = school;
    }
    getSchool() {
        return `${this.name}'s school is ${this.school}.`;
    }
    getRole() {
        return `${this.name}'s role is ${this.role}.`;
    }
}

module.exports = Intern;