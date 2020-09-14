import express from 'express';
import * as bp from 'body-parser';
import cors from 'cors';

import { IndexRouter } from '@src/routes/index';

class App {
  public app: express.Application;
  public indexRouter: IndexRouter = new IndexRouter();
  
  constructor() {
    this.app = express();
    this.cors();
    this.config();
    this.routes();
  }

  private cors(): void {
    const options: cors.CorsOptions = {
      allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
      credentials: true,
      methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
      origin: 'http://localhost:8080',
      preflightContinue: false
    };

    this.app.use(cors(options));
    this.app.options("*", cors(options))
  }

  private config(): void {
    this.app.disable('x-powered-by');
    this.app.use(bp.urlencoded({ extended: true }));
    this.app.use(bp.json({ limit: '20mb' }));
    this.app.use(express.static('public'));
    this.app.set('port', 3000);
  }

  private routes(): void {
    this.indexRouter.index(this.app);
  }
}

export default new App().app;
