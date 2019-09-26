import { insertDocument, findDocuments, findDocument, deleteDocument, updateDocument } from '../../db/documentsDb/documentsDb';
import { DocumentValues, Document } from '../../models/documents/documents.model';

export const createDocument = async (values: DocumentValues) => {
    const { user, content } = values;
    try {
        return await insertDocument({ user, content })
    } catch (e) {
        throw new Error(e.message)
    }
}

export const deleteOneDocument = async (id: string) => {
    try {
        return await deleteDocument(id);
    } catch (e) {
        throw new Error(e.message)
    }
}

export const updateOneDocument = async (document: Document) => {
    try {
        return await updateDocument(document);
    } catch (e) {
        throw new Error(e.message)
    }
}

export const getOneDocument = async (id: string) => {
    try {
        return await findDocument(id);
    } catch (e) {
        throw new Error(e.message)
    }
}

export const getAllDocuments = async () => {
    try {
        return await findDocuments()
    } catch (e) {
        throw new Error(e.message)
    }
}

