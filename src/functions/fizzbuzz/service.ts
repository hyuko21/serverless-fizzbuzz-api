import { ok } from '@/libs/helpers';
import { HttpResponse, IService } from '@/libs/protocols';
import { isBuzz, isFizz } from './helpers'

export class FizzBuzzService implements IService {
  async exec(request: FizzBuzzService.Request): Promise<HttpResponse> {
    const response: FizzBuzzService.Response = { result: request.number };
    if (isFizz(request.number)) {
      response.result = 'fizz'
      if (isBuzz(request.number)) {
        response.result = 'fizzbuzz';
      }
    } else if (isBuzz(request.number)) {
      response.result = 'buzz';
    }
    return ok(response);
  }
}

export namespace FizzBuzzService {
  export type Request = {
    number: number
  }

  export type Response = {
    result: 'fizz' | 'buzz' | 'fizzbuzz' | number
  }
}
