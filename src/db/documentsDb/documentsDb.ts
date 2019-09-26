import { db } from "..";
import logger from "../../utils/logger";
import { ObjectId } from "bson";
import { Document, DocumentValues } from "../../models/documents/documents.model";

const COLLECTION = 'documents';

export const insertDocument = async (values: DocumentValues) => {
    const { user, content } = values;
    return await db.collection(COLLECTION).insertOne({ user, content })
}


export const updateDocument = async (document: Document) => {
    const { id, user, content } = document;
    return await db.collection(COLLECTION).findOneAndUpdate({ '_id': new ObjectId(id) }, { $set: { user, content } })
}


export const deleteDocument = async (id: string) => {

    return await db.collection(COLLECTION).findOneAndDelete({ '_id': new ObjectId(id) });
}

export const findDocument = async (id: string) => {
    try {
        const document = await db.collection(COLLECTION).findOne({ '_id': new ObjectId(id) });

        return document

    } catch (error) {
        logger.error(error);
    }
}

export const findDocuments = async () => {
    try {
        const documents = await db.collection(COLLECTION).find().toArray();

        return documents;
    } catch (error) {
        logger.error(error);
    }
}
