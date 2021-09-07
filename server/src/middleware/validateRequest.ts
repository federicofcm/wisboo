import {AnyObjectSchema} from "yup";
import { Request, Response, NextFunction } from "express";
import log from "../logger";

const validate = (schema: AnyObjectSchema) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    return next();
  } catch (e) {
    log.error("Validation error: %s", (e as Error).message);
    return res.status(409).send((e as Error).message);
  }
};

export default validate;