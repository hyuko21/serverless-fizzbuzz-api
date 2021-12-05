import { HttpResponse } from './http';

export interface IService {
  exec(request: any): Promise<HttpResponse>
}
