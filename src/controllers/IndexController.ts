import { Request, Response, NextFunction } from 'express';

import { Controller } from '@src/bin/interface';
import ResponseClass from '@src/models/ResponseClass';

class IndexController implements Controller {
  public list(app: any, req: Request, res: Response, next: NextFunction): void {
    const resp = new ResponseClass();
    
    try {
      resp.msg = 'API FUNCIONANDO.';
      resp.dados = { 
        id: 1, 
        creator: 'Nathan Oliveira'
      }

      res.json(resp);
    } catch (error) {
      resp.error = true;
      resp.msg = 'Ocorreu um erro!'

      res.json(resp);
    }
  }
}

export default IndexController;