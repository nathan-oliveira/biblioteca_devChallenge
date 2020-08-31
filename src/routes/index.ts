import { Request, Response, NextFunction } from 'express';

import IndexController from '@src/controllers/IndexController';
import { BooksRouter } from '@src/routes/books/booksRouter';


export class IndexRouter {
  public indexController: IndexController = new IndexController();
  public booksRouter: BooksRouter = new BooksRouter();
  
  public index(app: any): void {
    app.get('/', (req: Request, res: Response, next: NextFunction) => {
      this.indexController.list(app, req, res, next);
    })

    this.booksRouter.routes(app);
  }
}
 