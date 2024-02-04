import { DB_COLLECTION_USER } from '@app/utils/env';
import { User, UserDB } from '@common/user';
import { Service } from 'typedi';
import { dbService } from './database';
import { GeneratorIdService } from './generator-id-service';

@Service()
export class UserService {
    constructor(private readonly generatorId: GeneratorIdService) {}

    async addUser(user: User): Promise<User> {
        do {
            user.id = this.generatorId.generateRandomId();
        } while ((await dbService.db.collection(DB_COLLECTION_USER).findOne({ id: user.id })) !== null);

        await dbService.db.collection(DB_COLLECTION_USER).insertOne(user);
        return user;
    }

    async getUser(userName: string): Promise<User> {
        return (await dbService.db.collection(DB_COLLECTION_USER).findOne({ name: userName })) as UserDB;
    }

    async getUserById(id: number): Promise<User> {
        return (await dbService.db.collection(DB_COLLECTION_USER).findOne({ id })) as UserDB;
    }
}
