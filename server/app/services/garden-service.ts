import { DB_COLLECTION } from '@app/utils/env';
import { GardenDB } from '@common/garden';
import { Service } from 'typedi';
import { dbService } from './database';

@Service()
export class GardenService {
    async getAllGarden(): Promise<GardenDB[]> {
        return (await dbService.db.collection(DB_COLLECTION).find({}).toArray()) as GardenDB[];
    }
}
