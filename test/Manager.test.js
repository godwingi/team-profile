const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const manager = new Manager ('Bob', '2424','managerBob@gmail.com', '001')

test("should create an object with the Manager's name, id, email and office number", () => {
      expect(manager.name).toBe('Bob');
      expect(manager.id).toBe('2424');
      expect(manager.email).toBe('managerBob@gmail.com');
      expect(manager.officeNumber).toBe('001');
    });

test('getName() method should get the name of the Manager', () => {
  expect(manager.getName()).toBe('Bob')
})

test('getId() method should get the ID of the Manager', () => {
  expect(manager.getId()).toBe('2424')
})

test('getEmail() method should get the email of the Manage', () => {
  expect(manager.getOfficeNumber()).toBe('001')
})

test('getOfficeNumber() method should get the office number of the Manager', () => {
    expect(manager.getEmail()).toBe('managerBob@gmail.com')
  })

test('getRole() method should return the role of the employee', () => {
  expect(manager.getRole()).toBe('Manager')
})