export interface Garden {
    id: number;
    name: string;
    location: string;
    photo: string;
    dimension: string;
    products: string[];
}

export interface GardenDB extends Garden {
    _id?: any;
}
