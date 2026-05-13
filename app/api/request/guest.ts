export interface DeleteCommentRequest {
    url: string;
    id: number;
    password?: string;
}

export interface EditCommentRequest {
    id: number;
    url: string;
    name: string;
    comment: string;
    password: string;
}

export interface GuestCommentRequest {
    url: string;
    name: string;
    comment: string;
    password: string;
}
