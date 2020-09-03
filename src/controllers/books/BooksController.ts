import { Request, Response, NextFunction } from 'express';

import { Controller } from '@src/utils/interface';
import BooksDAO from '@src/models/books/BooksDAO';
import Functions from '@src/utils/functions';

class BooksController implements Controller {
  public list(app: any, req: Request, res: Response, next: NextFunction): void {
    BooksDAO.getAll(function(err: any, result: any) {
      const dados = Functions.Response(err, result, 'GET')
      res.status(dados.status).json(dados.resp);
    });
  }

  public toSave(app: any, req: Request, res: Response, next: NextFunction): void {
    BooksDAO.toSave(req.body, function(err: any, result: any) {
      const dados = Functions.Response(err, result, 'POST')
      res.status(dados.status).json(dados.resp);
    });
  }

  public update(app: any, req: Request, res: Response, next: NextFunction): void {
    BooksDAO.update(req.params.id, req.body, function(err: any, result: any) {
      const dados = Functions.Response(err, result, 'PUT')
      res.status(dados.status).json(dados.resp);
    });
  }

  public delete(app: any, req: Request, res: Response, next: NextFunction): void {
    BooksDAO.delete(req.params.id, function(err: any, result: any) {
      const dados = Functions.Response(err, result, 'DELETE')
      res.status(dados.status).json(dados.resp);
    });
  }
}

export default BooksController;