import { Service } from 'typedi';

@Service()
export class GeneratorIdService {
    generateRandomId(): number {
        const maxId = 5000;

        return Math.floor(Math.random() * maxId);
    }
}
