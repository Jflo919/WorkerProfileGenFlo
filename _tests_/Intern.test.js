const Intern = require('../lib/Intern.js');
const Employee = require('../lib/Employee');

test('create an Intern object', () => {
    const intern = new Intern('', '', '', 'Intern', 'UCSC');

    expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('UCSC');
});