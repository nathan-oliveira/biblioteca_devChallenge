import { Request, Response, NextFunction } from 'express';

import { Controller } from '@src/bin/interface';
import ResponseClass from '@src/models/ResponseClass';
import BooksDAO from '@src/models/books/BooksDAO';

class BooksController implements Controller {
  public list(app: any, req: Request, res: Response, next: NextFunction): void {
    const resp = new ResponseClass();
    let status: number;
    
    BooksDAO.getAll(function(err: object, result: any) {
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

  public toSave(app: any, req: Request, res: Response, next: NextFunction): void {
    const resp = new ResponseClass();
    let status: number;
    
    // req.body.authors = req.body.autores.reduce((author: string, next: string) => `'{"${author}","${next}"}'`);

    // const autores = req.body.autores.map((autor: string) => `${autor}`);
    // req.body.autores = `{${autores.join(', ')}}`;

    BooksDAO.toSave(req.body, function(err: object, result: any) {
      if(err) {
        status = 401;
        resp.error = true;
        resp.msg = 'Ocorreu um erro!';

        console.log(err)
      } else {
        if(result.rowCount > 0) {
          resp.msg = 'Cadastro realizado com sucesso!';
          status = 201;
        } else {
          status = 401;
          resp.error = true;
          resp.msg = 'Não foi possivel efetuar o cadastro!';
        }
      }
      res.status(status).json(resp);
    });
  }
}

export default BooksController;