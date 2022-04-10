const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email);
        

        this.role = role;
        // data.officeNumber in inquiry
        this.officeNumber = officeNumber;
    }
    getRole() {
        return `${this.name}'s role is ${this.role}.`;
    }
}

module.exports = Manager;