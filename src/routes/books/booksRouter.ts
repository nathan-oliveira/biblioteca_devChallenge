import { Request, Response, NextFunction } from 'express';
import BooksController from '@src/controllers/books/BooksController';

export class BooksRouter {
  public booksController: BooksController = new BooksController();
  
  public routes(app: any): void {
    app.get('/books', (req: Request, res: Response, next: NextFunction) => {
      this.booksController.list(app, req, res, next);
    })

    app.post('/books', (req: Request, res: Response, next: NextFunction) => {
      this.booksController.toSave(app, req, res, next);
    })
  }
}
 