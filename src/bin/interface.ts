import { Request, Response, NextFunction } from 'express';

export interface Controller {
  list(app: any, req: Request, res: Response, next: NextFunction): void;
  toSave(app: any, req: Request, res: Response, next: NextFunction): void;
}