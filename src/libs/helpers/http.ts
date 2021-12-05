import { HttpResponse } from '@/libs/protocols';

export const ok = <T>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  body: data
});
