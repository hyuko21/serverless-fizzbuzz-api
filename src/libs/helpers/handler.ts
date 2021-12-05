export const makeHandler = (context: string) => {
  return {
    handler: context.split(process.cwd())[1].substring(1).replace(/\\/g, '/'),
    events: [
      {
        http: {
          method: 'any',
          path: '/',
        },
      },
      {
        http: {
          method: 'any',
          path: '{proxy+}'
        }
      },
    ]
  }
};
