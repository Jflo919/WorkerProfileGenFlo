const Employee = require('./Employee');

class Engineer extends Employee {
 constructor(name, id, email) {
     super(name);
     super(id);
     super(email);

     this.role = "Engineer";
     this.github = github;
  } 
  getGithub() {
      return `${this.name}'s GitHub Username is ${this.github}.`;
  }
  
  getRole() {
      return `${this.name}'s role is ${this.role}.`;

  }

}







module.exports = Engineer;