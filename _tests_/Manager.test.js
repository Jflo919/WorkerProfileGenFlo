const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee');

test('Create a Manager object', () => {
    const manager = new Manager('', '', '', 'Manager', 50);

    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toBe(50);
});

test("Get Manager's role", () => {
    const manager = new Manager('', '', '', 'Manager', 50);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});