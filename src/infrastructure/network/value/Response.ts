export interface ResponseData<T> {
    // ex. 200
    status: number;
    success: boolean;
    // ex. “OK”
    state: string;
    message: string;
    // Generics
    data: T;
}

export interface ResponseVoid {
    status: number; // ex. 200
    success: boolean;
    state: string; // ex. “OK”
    message: string;
}