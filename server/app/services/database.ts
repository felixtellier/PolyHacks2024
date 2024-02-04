import { DB_DB } from '@app/utils/env';
import { Db, MongoClient } from 'mongodb';
import { Service } from 'typedi';

@Service()
class DatabaseService {
    db: Db;
    private client: MongoClient;

    async connectToServer(uri: string): Promise<void> {
        try {
            this.client = await MongoClient.connect(uri);

            await this.client.connect();

            this.db = this.client.db(DB_DB);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log('error', err);
        }
    }
}

export const dbService = new DatabaseService();
