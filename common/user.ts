import { Garden } from './garden';
export interface User{
    id: number;
    name: string;
    email: string;
    password: string;
    gardens: Garden[];
    points: number;
}