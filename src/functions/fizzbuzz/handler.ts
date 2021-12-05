import ServerlessHttp from 'serverless-http';
import { makeFizzBuzzApp } from './app';

const fizzBuzzApp = makeFizzBuzzApp()

export const main = ServerlessHttp(fizzBuzzApp);
