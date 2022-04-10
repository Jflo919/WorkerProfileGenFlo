const Intern = require('../lib/Intern.js');
const Employee = require('../lib/Employee');

test('create an Intern object', () => {
    const intern = new Intern('', '', '', 'Intern', 'UCSC');

    expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('UCSC');
});

test("Get Intern's school", () => {
    const intern = new Intern('', '', '', 'Intern', 'UCSC');

    expect(intern.getSchool()).toEqual(expect.stringContaining('UCSC'));
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});