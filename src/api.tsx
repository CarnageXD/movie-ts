import axios from "axios";
import { MoviesDetailsApiResponse } from "./types/movieTypes";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export const getMoviesDataAPI = {
    getMovieDetails(id: string) {
        return instance.get<MoviesDetailsApiResponse>(`/movie/${id}?api_key=e5bf0d2a91e3d8acf07245cbd2950b9f&language=en-U`)
    },
    getMovieTrailer(id: string) {
        return instance.get(`movie/${id}/similar?api_key=e5bf0d2a91e3d8acf07245cbd2950b9f&language=en-US`)
    }
}