
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Julian');

    expect(employee.name).toBe('Julian');
    
});











