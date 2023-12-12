export interface AccountDetailListResponse {
    created_by: string;
    description: string;
    favorite_count: number;
    id: string;
    items: Item[];
    item_count: number;
    iso_639_1: ISO639_1;
    name: string;
    poster_path: string;
}

export enum ISO639_1 {
    En = "en",
}

export interface Item {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: MediaType;
    original_language: ISO639_1;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export enum MediaType {
    Movie = "movie",
}