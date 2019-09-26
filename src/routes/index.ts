import { Application } from 'express';
import documentsRouter from './documents/documents.router';

export const initRoutes = (app: Application) => {
    app.use('/documents', documentsRouter);
}