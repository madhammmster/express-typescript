import { NextFunction, Request, Response } from "express";
import { createDocument, getAllDocuments, getOneDocument, deleteOneDocument, updateOneDocument } from "../../services/documentsService/documentsService";

export const postDocument = async (req: Request, res: Response, next: NextFunction) => {
    const { user, content } = req.body;

    try {
        await createDocument({ user, content });

        res.sendStatus(201);
        next();
    } catch (e) {

        console.log(e.message)
        res.sendStatus(500) && next(e);
    }
}



export const deleteDocument = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await deleteOneDocument(id);

        res.sendStatus(200);

        next();
    } catch (e) {

        console.log(e.message)
        res.sendStatus(500) && next(e);
    }
}

export const putDocument = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { user, content } = req.body;
        await updateOneDocument({ id, user, content });

        res.sendStatus(200);

        next();
    } catch (e) {

        console.log(e.message)
        res.sendStatus(500) && next(e);
    }
}

export const getDocument = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const document = await getOneDocument(id);

        res.send(document);

        next();
    } catch (e) {

        console.log(e.message)
        res.sendStatus(500) && next(e);
    }
}


export const getDocuments = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const documents = await getAllDocuments();

        res.send(documents);

        next();
    } catch (e) {

        console.log(e.message)
        res.sendStatus(500) && next(e);
    }
}


