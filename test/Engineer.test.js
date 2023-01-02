const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const engineer = new Engineer ('Suzie','9876','suzie@gmail.com', 'suzieWorks')

test("should create an object with the Enginneer's name, id, email and Github Username", () => {
      expect(engineer.name).toBe('Suzie');
      expect(engineer.id).toBe('9876');
      expect(engineer.email).toBe('suzie@gmail.com');
      expect(engineer.github).toBe('suzieWorks');
    });


test("getName() method should get the name of the Engineer", () => { 
  expect(engineer.getName()).toBe('Suzie')
})

test("getId() method should get the ID of the Engineer", () => { 
  expect(engineer.getId()).toBe('9876')
})

test("getEmail() method should get the email of the Engineer", () => { 
  expect(engineer.getEmail()).toBe('suzie@gmail.com')
})

test("getGithub() method should get the Github username of the Engineer", () => { 
    expect(engineer.getGithub()).toBe('suzieWorks')
})

test("getRole() method should return the role of the employee", () => { 
  expect(engineer.getRole()).toBe('Engineer')
})
