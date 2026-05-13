export interface CreateWeddingDesignRequest {
    name: string;
    img: string;
    category: string;
}

export interface PatchWeddingDesignRequest {
    id: number;
    name: string;
    img: string;
    category: string;
}
