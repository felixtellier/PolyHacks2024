import { GardenService } from '@app/services/garden-service';
import { Garden } from '@common/garden';
import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Service } from 'typedi';

@Service()
export class GardenController {
    router: Router;

    constructor(private readonly gardenService: GardenService) {
        this.configureRouter();
    }

    configureRouter(): void {
        this.router = Router();
        this.router.get('/', async (req: Request, res: Response) => {
            try {
                const gardens = await this.gardenService.getAllGarden();

                res.status(StatusCodes.OK).json(gardens);
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
            }
        });

        this.router.put('/', async (req: Request, res: Response) => {
            try {
                const garden: Garden = req.body;
                await this.gardenService.addGarden(garden);
                res.status(StatusCodes.CREATED).send();
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
            }
        });
    }
}
