const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern')
const intern = new Intern ('Matt','1234','mattie@gmail.com', 'UofT')

test("should create an object with the Intern's name, id, email and school name", () => {
      expect(intern.name).toBe('Matt');
      expect(intern.id).toBe('1234');
      expect(intern.email).toBe('mattie@gmail.com');
      expect(intern.school).toBe('UofT');
    });

test('getName() method should get the name of the Intern', () => {
  expect(intern.getName()).toBe('Matt')
})

test('getId() method should get the ID of the Intern', () => {
  expect(intern.getId()).toBe('1234')
})

test('getEmail() method should get the email of the Intern', () => {
  expect(intern.getEmail()).toBe('mattie@gmail.com')
})

test('getSchool() method should get the Github username of the Intern', () => {
    expect(intern.getSchool()).toBe('UofT')
  })

test('getRole() method should return the role of the employee', () => {
  expect(intern.getRole()).toBe('Intern')
})