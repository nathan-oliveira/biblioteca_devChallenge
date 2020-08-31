import { Request, Response, NextFunction } from 'express';

import { Controller } from '@src/bin/interface';
import ResponseClass from '@src/models/ResponseClass';
import BooksDAO from '@src/models/books/BooksDAO';


class BooksController implements Controller {
  public list(app: any, req: Request, res: Response, next: NextFunction): void {
    const resp = new ResponseClass();
    let status: number;
    
    BooksDAO.getAll(function(err: any, result: any) {
      if(err) {
        resp.error = true;
        resp.msg = 'Ocorreu um erro!';
          status = 401;
      } else {
        resp.dados = result.rows;
        status = 201;
      }

      res.status(status).json(resp);
    })
  }
}

export default BooksController;