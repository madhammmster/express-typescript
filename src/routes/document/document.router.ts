import { Router } from 'express';
import { postDocument } from '../../controllers/document/document.controller';

const documentRouter = Router();

documentRouter.post('/', postDocument);

export default documentRouter;