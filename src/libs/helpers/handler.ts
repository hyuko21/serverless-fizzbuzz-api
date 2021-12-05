export const makeHandler = (context: string, basePath: string) => {
  return {
    handler: context.split(process.cwd())[1].substring(1).replace(/\\/g, '/'),
    events: [
      {
        http: {
          method: 'any',
          path: `${basePath}`,
          private: true
        },
      },
      {
        http: {
          method: 'any',
          path: `/${basePath}/{proxy+}`,
          private: true
        }
      },
    ]
  }
};
