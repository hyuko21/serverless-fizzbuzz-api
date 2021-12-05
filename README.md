# Serverless FizzBuzz API

This project is a FizzBuzz game implementation using serverless pattern.

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

## Test your service

This project contains a single lambda function triggered by an HTTP request made on the provisioned API Gateway REST API `/fizzbuzz` route with `POST` method. The request body must be provided as `application/json`.

- sending a `POST` request to `/fizzbuzz` with a payload containing a number property named `number` will result in API Gateway returning a `200` HTTP status code with a `result` being either "fizzbuzz", "fizz" or "buzz".

> :warning: The deployed service requires an API Key to execute the lambda through API Gateway.

### Locally

In order to test the fizzbuzz function locally, run the following command (using `serverless-offline` plugin to serve it locally. Test your requests against http://localhost:3000):

- `npm start` or `yarn start`

### Remotely

Copy and replace your `url` - found in Serverless `deploy` command output - and `name` parameter in the following `curl` command in your terminal or in Postman to test your newly deployed application.

```
curl --location --request POST 'https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/fizzbuzz' \
--header 'Content-Type: application/json' \
--header 'X-Api-Key: {SERVICE_API_KEY}'
--data-raw '{
    "number": 22
}'
```

## Project features

### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas

### 3rd party libraries

- [@serverless/typescript](https://github.com/serverless/typescript) - provides up-to-date TypeScript definitions for your `serverless.ts` service file
