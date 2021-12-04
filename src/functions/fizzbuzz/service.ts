import { isBuzz, isFizz } from "./helpers"

export class FizzBuzzService {
  exec(request: FizzBuzzService.Request): FizzBuzzService.Response {
    const response: FizzBuzzService.Response = { result: request.number };
    if (isFizz(request.number)) {
      response.result = 'fizz'
      if (isBuzz(request.number)) {
        response.result = 'fizzbuzz';
      }
    } else if (isBuzz(request.number)) {
      response.result = 'buzz'
    }
    return response
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
