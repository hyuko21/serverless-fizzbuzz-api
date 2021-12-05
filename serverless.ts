import type { AWS } from '@serverless/typescript';
import { functions } from '@/functions';

const serverlessConfiguration: AWS = {
  service: 'serverless-fizzbuzz',
  frameworkVersion: '2',
  plugins: ['serverless-offline', 'serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: "${opt:stage, 'dev'}",
    versionFunctions: false,
    tracing: {
      apiGateway: true,
      lambda: true,
    },
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: [
          'xray:PutTraceSegments',
          'xray:PutTelemetryRecords'
        ],
        Resource: '*',
      },
    ],
    logRetentionInDays: 7,
    logs: {
      frameworkLambda: true,
      restApi: true,
    },
    apiName: '${self:provider.stage}-${self:service}',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
      apiKeys: ['${self:provider.apiName}'],
      usagePlan: {
        quota: {
          limit: 144000,
          offset: 0,
          period: 'DAY',
        },
        throttle: {
          burstLimit: 1000,
          rateLimit: 1000,
        },
      }
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    lambdaHashingVersion: '20201221',
  },
  functions,
  package: { individually: true },
  custom: {
    esbuild: {
      packager: 'yarn',
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
