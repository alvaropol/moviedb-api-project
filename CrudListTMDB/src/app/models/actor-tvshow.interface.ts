export interface TvShowsPersonResponse {
    cast: CastTvShow[];
    crew: CastTvShow[];
    id: number;
}

export interface CastTvShow {
    adult: boolean;
    backdrop_path: BackdropPath;
    genre_ids: number[];
    id: number;
    origin_country: OriginCountry[];
    original_language: OriginalLanguage;
    original_name: Name;
    overview: string;
    popularity: number;
    poster_path: PosterPath;
    first_air_date: string;
    name: Name;
    vote_average: number;
    vote_count: number;
    character?: string;
    credit_id: string;
    episode_count?: number;
    department?: string;
    job?: string;
}

export enum BackdropPath {
    PGWgB8AFFOtwKSSoGYbmWsO5MfqJpg = "/pgWgB8AfFOtwKSSoGYbmWsO5Mfq.jpg",
    XbjLWFCrlQDxZZ7GzdalzOPK000Jpg = "/xbjLWFCrlQDxZZ7GzdalzOPK000.jpg",
}

export enum Name {
    DugDays = "Dug Days",
    MonstersAtWork = "Monsters at Work",
}

export enum OriginCountry {
    Us = "US",
}

export enum OriginalLanguage {
    En = "en",
}

export enum PosterPath {
    E5KT33XH2GX7XBFIK1UUJAVU5DjJpg = "/e5kT33XH2gX7xBFIK1uUJAvU5dj.jpg",
    The2GxgwhcuSmI5Xtexb0T9ZGj43FSJpg = "/2gxgwhcuSmI5xtexb0t9zGj43FS.jpg",
}