import { IService } from '@/libs/protocols'
import { Request, RequestHandler, Response } from 'express'

export const adaptExpressRoute = (service: IService): RequestHandler => {
  return async (request: Request, response: Response) => {
    const requestData = {
      ...(request.body ?? {}),
      ...(request.params ?? {}),
    };

    const httpResponse = await service.exec(requestData);
    response.status(httpResponse.statusCode);

    if (response.statusCode >= 200 && response.statusCode <= 299) {
      response.json(httpResponse.body);
    } else {
      response.json({ error: httpResponse.body.message });
    }
  }
};
