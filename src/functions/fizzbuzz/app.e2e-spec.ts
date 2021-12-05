import request from 'supertest';
import { makeFizzBuzzApp } from './app';

describe('FizzBuzz E2E', () => {
  const basePath = '/fizzbuzz';
  let agentTest: request.SuperTest<request.Test>;
  let requestTest: request.Test;

  beforeAll(() => {
    const fizzBuzzApp = makeFizzBuzzApp();
    agentTest = request(fizzBuzzApp);
  });

  describe('POST /', () => {
    const apiPath = `${basePath}/`;

    beforeEach(() => {
      requestTest = agentTest.post(apiPath);
    });

    it('should return "fizzbuzz" if number is divisible by 3 and 5', async () => {
      await requestTest.send({ number: 15 }).expect(200, { result: 'fizzbuzz' });
    });

    it('should return "fizz" if number is only divisible by 3', async () => {
      await requestTest.send({ number: 6 }).expect(200, { result: 'fizz' });
    });

    it('should return "buzz" if number is only divisible by 5', async () => {
      await requestTest.send({ number: 10 }).expect(200, { result: 'buzz' });
    });

    it('should return the number if it is not divisible neither by 3 nor 5', async () => {
      await requestTest.send({ number: 22 }).expect(200, { result: 22 });
    });
  });
});