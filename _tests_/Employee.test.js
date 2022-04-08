
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Julian', 'floydjulian1991@gmail.com');

    expect(employee.name).toBe('Julian');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.role).toBe('Employee');
    expect(employee.email).toBe('floydjulian1991@gmail.com');
});

test("Get Employee's name", () => {
    const employee = new Employee('Julian', 'floydjulian1991@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Julian'));
});

test("Get Employee's id", () => {
    const employee = new Employee('Julian', 'floydjulian1991@gmail.com');

    expect(employee.getId()).toBeTruthy();
});

test("Get Employee's email", () => {
    const employee = new Employee('Julian', 'floydjulian1991@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('floydjulian1991@gmail.com'));
});

test("Get Employee's role", () => {
    const employee = new Employee('Julian', 'floydjulian1991@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});






