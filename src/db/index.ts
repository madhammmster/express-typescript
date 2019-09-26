import { MongoClient, Db, MongoError } from 'mongodb';
import { url, dbName } from './config';


const client = new MongoClient(
    url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

export let db: Db;

export const initDatabaseConnection = async () => {
    return new Promise<MongoClient | MongoError>((resolve, reject) => {
        client.connect((error, client) => {
            if (error) {
                reject(error);
            }

            db = client.db(dbName);

            resolve(client);
        })
    })

}