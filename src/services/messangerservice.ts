import { faker } from '@faker-js/faker';

function generateName(): string {
  // Generate first and last name separately
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  return `${firstName} ${lastName}`;

  // Return faker.name.findName();
}

const name = generateName();
console.log(name); // Output
