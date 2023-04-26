export interface RecommendFivesongs {
    tracks: Track[];
    seeds: Seed[];
}

export interface Seed {
    initialPoolSize: number;
    afterFilteringSize: number;
    afterRelinkingSize: number;
    id: string;
    type: string;
    href: string;
}

export interface Track {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIDS;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: null | string;
    track_number: number;
    type: string;
    uri: string;
}

export interface Album {
    album_group: string;
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: Type;
    uri: string;
}

export interface ExternalUrls {
    spotify: string;
}

export enum Type {
    Artist = "artist",
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface ExternalIDS {
    isrc: string;
}

export interface ArtistRS {
    data: DataArtis;
    status: number;
    statusText: string;
    headers: ArtistRSHeaders;
    config: Config;
    request: Request;
}

export interface Config {
    transitional: Transitional;
    adapter: string[];
    transformRequest: null[];
    transformResponse: null[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: Request;
    headers: ConfigHeaders;
    params: Params;
    method: string;
    url: string;
}

export interface Request {
}

export interface ConfigHeaders {
    Accept: string;
    Authorization: string;
}

export interface Params {
    q: string;
    type: Type;
}

export interface Transitional {
    silentJSONParsing: boolean;
    forcedJSONParsing: boolean;
    clarifyTimeoutError: boolean;
}

export interface DataArtis {
    artists: ArtistsSingle;
}

export interface ArtistsSingle {
    href: string;
    items: Item[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
}

export interface Item {
    external_urls: ExternalUrls;
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: Type;
    uri: string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href: null;
    total: number;
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface ArtistRSHeaders {
    "cache-control": string;
    "content-length": string;
    "content-type": string;
}

