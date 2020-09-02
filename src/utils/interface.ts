import { Request, Response, NextFunction } from 'express';

export interface Controller {
  list(app: Function, req: Request, res: Response, next: NextFunction): void;
  toSave(app: Function, req: Request, res: Response, next: NextFunction): void;
  update(app: Function, req: Request, res: Response, next: NextFunction): void;
  delete(app: Function, req: Request, res: Response, next: NextFunction): void;
}