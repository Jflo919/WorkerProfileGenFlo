const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super(name);
        super(id);
        super(email);

        this.role = "Manager";
        // data.officeNumber in inquiry
        this.officeNumber = officeNumber;
    }
    getRole() {
        return `${this.name}'s role is ${this.role}.`;
    }
}

module.exports = Manager;