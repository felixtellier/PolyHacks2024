export interface Message {
    title: string;
    body: string;
}

export interface Garden {
    id: number;
    name: string;
    location: string;
    photo: string;
    dimension: string;
    products: string[];
}


export interface User{
    id: number;
    name: string;
    email: string;
    password: string;
    gardens: Garden[];
    points: number;
}