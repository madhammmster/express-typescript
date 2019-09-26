
export interface DocumentValues {
    user: string;
    content: string;
}

export interface Document extends DocumentValues {
    id: string;
}