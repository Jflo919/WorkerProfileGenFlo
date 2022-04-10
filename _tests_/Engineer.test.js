const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test ('create an Engineer object', () => {
    const engineer = new Engineer('Julian', '', '' ,'Jflo919', 'Engineer');
    expect(engineer.name).toBe('Julian');
    expect(engineer.githubs).toBe('Jflo919');
    expect(engineer.role).toBe('Engineer');
});