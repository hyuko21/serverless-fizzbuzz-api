import fs from 'fs';
import { makeHandler } from '@/libs/helpers';

export const functions = fs
  .readdirSync(__dirname)
  .filter(item => !item.startsWith('index'))
  .reduce((acc, item) => {
    return {
      ...acc,
      [item]: makeHandler(`${__dirname}/${item}/handler.main`, item)
    };
  }, {});
