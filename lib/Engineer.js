const Employee = require('./Employee');

class Engineer extends Employee {
 constructor(name, id, email, githubs, role) {
    
    super(name, id, email);
     
    this.githubs = githubs; 
    this.role = role;
     
  } 
 
  getGithub() {
      return `${this.name}'s GitHub Username is ${this.githubs}.`;
  }
  
  getRole() {
      return `${this.name}'s role is ${this.role}.`;

  }

}







module.exports = Engineer;