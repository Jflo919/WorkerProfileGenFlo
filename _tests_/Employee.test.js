
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Julian', 'floydjulian1991@gmail.com');

    expect(employee.name).toBe('Julian');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.role).toBe('Employee');
    expect(employee.email).toBe('floydjulian1991@gmail.com');
});











