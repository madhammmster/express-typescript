import { documentDb } from './../../db/documentDb/documentDb';

export const createDocument = async (user: any, content: any) => {
    try {
        return await documentDb(user, content)
    } catch (e) {
        throw new Error(e.message)
    }
}