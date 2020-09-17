import { Request, Response, NextFunction } from 'express';

import { Controller } from '@src/utils/interface';

class IndexController implements Controller {
  public list(app: any, req: Request, res: Response, next: NextFunction): void {
    res.status(201).json({ 
      id: 1, 
      creator: 'Nathan Oliveira'
    });
  }

  public toSave(app: any, req: Request, res: Response, next: NextFunction): void {
    res.send("toSave");
  }

  public update(app: any, req: Request, res: Response, next: NextFunction): void {
    res.send("update");
  }

  public delete(app: any, req: Request, res: Response, next: NextFunction): void {
    res.send("delete");
  }
}

export default IndexController;