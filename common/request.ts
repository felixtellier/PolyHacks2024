export interface OutRequest {
    state: string;
    garden: string;
    user: string;
}

export interface InRequest {
    garden: string;
    user: string;
}

export interface RequestDB extends Request {
    _id?: any;
}
