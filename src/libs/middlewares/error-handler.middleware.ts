import { isCelebrateError } from 'celebrate'
import { NextFunction, Request, Response } from 'express'

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  if (isCelebrateError(error)) {
    const errorMessage = error.details.get('body')?.message;
    res.status(400).json({ error: errorMessage });
  } else {
    next(error);
  }
}
