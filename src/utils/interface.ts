import { Request, Response, NextFunction } from 'express';

export interface Controller {
  list(app: any, req: Request, res: Response, next: NextFunction): void;
  toSave(app: any, req: Request, res: Response, next: NextFunction): void;
  update(app: any, req: Request, res: Response, next: NextFunction): void;
  delete(app: any, req: Request, res: Response, next: NextFunction): void;
}