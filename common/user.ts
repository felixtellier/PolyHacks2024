import { Garden } from './garden';
import { InRequest } from './request';
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    gardens: Garden[];
    points: number;
    requests: InRequest[];
}

export interface UserDB extends User {
    _id?: any;
}
