class Employee {
    constructor(name, email) {
        // may have to set name to data.name via inquirer, first get tests to fail, passed, refactored
        this.name = name;
        this.id = Math.floor(Math.random() * 123456789 + 9999);
        this.email =  email;
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