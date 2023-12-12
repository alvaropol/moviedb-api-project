export interface AccountListsResponse {
    page: number;
    results: List[];
    total_pages: number;
    total_results: number;
}

export interface List {
    description: string;
    favorite_count: number;
    id: number;
    item_count: number;
    iso_639_1: ISO639_1;
    list_type: ListType;
    name: string;
    poster_path: null | string;
}

export enum ISO639_1 {
    En = "en",
}

export enum ListType {
    Movie = "movie",
}