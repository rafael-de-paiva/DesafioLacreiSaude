import { faker } from '@faker-js/faker';

export default function generateUserData() {
  const email = faker.internet.email();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  const upper = faker.string.alpha({ length: 1, casing: 'upper' });
  const lower = faker.string.alpha({ length: 1, casing: 'lower' });
  const number = faker.number.int({ min: 0, max: 9 }).toString();
  const special = faker.helpers.arrayElement(['!', '@', '#', '*', '-', '_', '&']);
  const filler = faker.internet.password(4); // resto aleatório

  const shuffledPassword = faker.helpers.shuffle([
    upper,
    lower,
    number,
    special,
    ...filler
  ]).join('');

  return {
    email,
    firstName,
    lastName,
    password: shuffledPassword
  };
}
