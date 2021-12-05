import type { AWS } from '@serverless/typescript';
import { functions } from '@/functions';

const serverlessConfiguration: AWS = {
  service: 'serverless-fizzbuzz',
  frameworkVersion: '2',
  plugins: ['serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: "${opt:stage, 'dev'}",
    versionFunctions: false,
    apiName: '${self:provider.stage}-${self:service}',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
      apiKeys: ['${self:provider.apiName}'],
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  functions,
  package: { individually: true },
};

module.exports = serverlessConfiguration;
