const employee = require('../lib/Employee');

describe('Employee', () => {
    it("should create and object with the Employee's name, id and email", () => {
      // Arrange
      const name = 'Deborah';
      const id = '5555';
      const email = 'test@test.com';

      // Act
      const objName = new employee(name);
      const objId = new employee(id);
      const objEmail = new employee(email);

      // Assert
      expect(name).toEqual(objName);
      expect(id).toEqual(objId);
      expect(email).toEqual(objEmail);
    });
})