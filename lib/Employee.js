class Employee {
    constructor(name = '') {
        // may have to set name to data.name via inquirer, first get tests to fail, passed, refactored
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    getName() {
        return `Employee's name is ${this.name}`;
    }

    getId() {
        return `${this.name}'s id is ${this.id}`;
    }

    getEmail() {
        return `${this.name}'s email is ${this.email}`;
    }

    getRole() {
        return `${this.name}'s role is ${this.role}`;
    }
}


module.exports = Employee; 