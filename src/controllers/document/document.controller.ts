import { NextFunction, Request, Response } from "express";
import { createDocument } from "../../services/documentService/documentService";

export const postDocument = async (req: Request, res: Response, next: NextFunction) => {    
    const { user, content } = req.body;

    try {
        await createDocument(user, content);

        res.sendStatus(201);
        next();
    } catch (e) {

        console.log(e.message)
        res.sendStatus(500) && next(e);
    }
}