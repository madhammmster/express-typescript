import { Router } from 'express';
import { postDocument, getDocuments, getDocument, deleteDocument, putDocument } from '../../controllers/documents/documents.controller';

const documentsRouter = Router();

documentsRouter.post('/', postDocument);

documentsRouter.delete('/:id', deleteDocument);

documentsRouter.put('/:id', putDocument);

documentsRouter.get('/', getDocuments);

documentsRouter.get('/:id', getDocument);

export default documentsRouter;