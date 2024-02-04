import { UserService } from '@app/services/user-service';
import { User } from '@common/user';
import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Service } from 'typedi';

@Service()
export class UsersController {
    router: Router;

    constructor(private readonly userService: UserService) {
        this.configureRouter();
    }

    configureRouter(): void {
        this.router = Router();

        this.router.post('/', async (req: Request, res: Response) => {
            try {
                const userInfo = req.body;
                if (!Object.keys(userInfo).length) {
                    res.status(StatusCodes.BAD_REQUEST).send();
                    return;
                }

                const user = await this.userService.getUser(userInfo.username);

                if (user === null) {
                    const userNew: User = {
                        id: 0,
                        email: '',
                        points: 0,
                        gardens: [],
                        requests: [],
                        name: userInfo.username,
                        password: userInfo.password,
                    };
                    await this.userService.addUser(userNew);
                    res.status(StatusCodes.CREATED).json(await this.userService.getUser(userInfo.username));
                    return;
                }

                if (user.password === userInfo.password) res.status(StatusCodes.OK).json(user);
                else res.status(StatusCodes.FORBIDDEN).send();
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR);
            }
        });

        this.router.get('/:id', async (req: Request, res: Response) => {
            try {
                const id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    res.status(StatusCodes.FORBIDDEN).send();
                    return;
                }

                res.status(StatusCodes.OK).json(await this.userService.getUserById(id));
            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
            }
        });
    }
}
