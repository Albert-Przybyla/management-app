import { NextFunction, Request, Response } from "express";
import { ValidationError } from "class-validator";

export function validationErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (Array.isArray(err) && err.every((e) => e instanceof ValidationError)) {
    const messages = err.map((error: ValidationError) => Object.values(error.constraints || {})).flat();
    console.error("Validation Errors: daasdasdsa", messages);
    return res.status(400).json(messages);
  }
  next(err);
}
