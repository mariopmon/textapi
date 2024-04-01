'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var faker_1 = require('@faker-js/faker');
function generateName() {
  // Generate first and last name separately
  var firstName = faker_1.faker.name.firstName();
  var lastName = faker_1.faker.name.lastName();
  return ''.concat(firstName, ' ').concat(lastName);
  // Return faker.name.findName();
}
var name = generateName();
console.log(name); // Output
