// import { faker } from '@faker-js/faker';

// function generateName(): string {
//   // Generate first and last name separately
//   const firstName = faker.name.firstName('female');
//   const lastName = faker.name.lastName('female');
  
//   return `${firstName} ${lastName}`;
//   // Return faker.name.findName();
// }

// export enum Sex {
//   Female = 'female',
//   Male = 'male',
// }

// export type SexType = `${Sex}`;



// const name = generateName();
// console.log(name); // Output
import { faker } from "@faker-js/faker";

export const generateLondonWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateDublinWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};
