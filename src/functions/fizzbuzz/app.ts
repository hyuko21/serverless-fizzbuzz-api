import express from 'express';
import { fizzBuzzRouter } from './routes';

export const makeFizzBuzzApp = (): Express.Application => {
  const fizzBuzzApp = express();
  fizzBuzzApp.use(express.json());
  fizzBuzzApp.use('/fizzbuzz', fizzBuzzRouter);
  return fizzBuzzApp;
};
