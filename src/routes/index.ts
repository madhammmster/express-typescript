import { Application } from 'express';
import documentRouter from './document/document.router';

export const initRoutes = (app: Application) => {
    app.use('/document', documentRouter);
}