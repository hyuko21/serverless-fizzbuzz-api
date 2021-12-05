import { FizzBuzzService } from '@/functions/fizzbuzz/service';

export const makeFizzBuzzService = (): FizzBuzzService => {
  return new FizzBuzzService()
};
