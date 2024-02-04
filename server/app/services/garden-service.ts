/* eslint-disable no-underscore-dangle */
import { DB_COLLECTION } from '@app/utils/env';
import { Garden, GardenDB } from '@common/garden';
import { Service } from 'typedi';
import { dbService } from './database';
import { GeneratorIdService } from './generator-id-service';

@Service()
export class GardenService {
    constructor(private readonly generatorId: GeneratorIdService) {}

    async addGarden(garden: Garden): Promise<Garden> {
        do {
            garden.id = this.generatorId.generateRandomId();
        } while ((await dbService.db.collection(DB_COLLECTION).findOne({ id: garden.id })) !== null);

        await dbService.db.collection(DB_COLLECTION).insertOne(garden);
        return garden;
    }

    async updateGarden(garden: GardenDB): Promise<Garden> {
        const filter = { id: garden.id };
        const update = {
            id: garden.id,
            dimension: garden.dimension,
            location: garden.location,
            name: garden.name,
            products: garden.products,
        };
        await dbService.db.collection(DB_COLLECTION).findOneAndReplace(filter, update, { returnDocument: 'before' });
        return garden;
    }

    async getAllGarden(): Promise<GardenDB[]> {
        return (await dbService.db.collection(DB_COLLECTION).find({}).toArray()) as GardenDB[];
    }

    async getGardenById(id: number): Promise<Garden> {
        return (await dbService.db.collection(DB_COLLECTION).findOne({ id })) as GardenDB;
    }

    async deleteGarden(id: number): Promise<boolean> {
        const res = await dbService.db.collection(DB_COLLECTION).findOneAndDelete({ id });
        return res.value !== null;
    }
}
