const Employee = require('../lib/Employee');
const employee = new Employee ('Deborah', '5555','debtest@gmail.com')

test("should create an object with the Employee's name, id and email", () => {
      expect(employee.name).toBe('Deborah');
      expect(employee.id).toBe('5555');
      expect(employee.email).toBe('debtest@gmail.com');
    });

test("should get the name of the employee when the getName() method is called", () => {
  expect(employee.getName()).toBe('Deborah')
})

test('"should get the ID of the employee', () => { 
  expect(employee.getId()).toBe('5555')
})

test("should get the email of the employee", () => {
  expect(employee.getEmail()).toBe('debtest@gmail.com')
})

test("should return the role", () => {
  expect(employee.getRole()).toBe('Employee')
})