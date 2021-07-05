export type InfoMoviesType = {
    poster_path?: string | null
    adult?: boolean
    overview?: string
    release_date?: string
    genre_ids?: number[]
    id?: number
    original_title?: string
    original_language?: string
    title?: string
    backdrop_path?: string | null
    popularity?: number
    vote_count?: number
    video?: boolean
    vote_average?: number
}

export type GetMoviesApiResponse = {
    page: number
    total_result: number
    total_pages: number
    results: InfoMoviesType[]
}

export type MoviesDetailsApiResponse = {
    adult?: boolean
    backdrop_path?: string | null
    belongs_to_collection?: null | object
    budget?: number
    genres?: {
        id?: number
        name?: string
    }[]
    homepage?: string | null
    id: number
    imdb_id?: string | null
    original_language?: string
    original_title?: string
    overview?: string | null
    popularity?: number
    poster_path?: string | null
    production_companies?: {
        name?: string
        id?: number
        logo_path?: string | null
        origin_country?: string
    }[]
    production_countries?: {
        iso_3166_1?: string
        name?: string
    }[]
    release_date?: string
    revenue?: number
    runtime?: number | null
    spoken_languages: {
        iso_639_1?: string
        name?: string
    }[]
    status?: string
    tagline?: string | null
    title?: string
    video?: boolean
    vote_average?: number
    vote_count?: number
}

export type InfoMovieTrailer = {
    id?: string
    iso_639_1?: number
    iso_3166_1?: number
    key?: string
    name?: string
    site?: string
    size?: number
    type?: string
}