export interface ListByArtis {
    tracks: Track[];
}

export interface Track {
    album: Album;
    artists: Artist[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIDS;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: TrackType;
    uri: string;
}

export interface Album {
    album_group: AlbumGroup;
    album_type: AlbumGroup;
    artists: Artist[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    is_playable: boolean;
    name: string;
    release_date: string;
    release_date_precision: ReleaseDatePrecision;
    total_tracks: number;
    type: AlbumGroup;
    uri: string;
}

export enum AlbumGroup {
    Album = "album",
}

export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: ID;
    name: Name;
    type: ArtistType;
    uri: URI;
}

export interface ExternalUrls {
    spotify: string;
}

export enum ID {
    The0H1Zs4CTlU9D2QtgPxptUD = "0h1zs4CTlU9D2QtgPxptUD",
    The0K9PSmFx0KWESA9Jqx8ACW = "0K9pSmFx0kWESA9jqx8aCW",
}

export enum Name {
    GabyMoreno = "Gaby Moreno",
    RicardoArjona = "Ricardo Arjona",
}

export enum ArtistType {
    Artist = "artist",
}

export enum URI {
    SpotifyArtist0H1Zs4CTlU9D2QtgPxptUD = "spotify:artist:0h1zs4CTlU9D2QtgPxptUD",
    SpotifyArtist0K9PSmFx0KWESA9Jqx8ACW = "spotify:artist:0K9pSmFx0kWESA9jqx8aCW",
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export enum ReleaseDatePrecision {
    Day = "day",
    Year = "year",
}

export interface ExternalIDS {
    isrc: string;
}

export enum TrackType {
    Track = "track",
}
