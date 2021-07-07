import axios from "axios";
import { GetMoviesApiResponse, InfoMoviesType, InfoMovieTrailer, MoviesDetailsApiResponse } from "./types/movieTypes";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export const getMoviesDataAPI = {
    getMovieDetails(id: string) {
        return instance.get<MoviesDetailsApiResponse>(`/movie/${id}?api_key=e5bf0d2a91e3d8acf07245cbd2950b9f&language=en-U`)
            .then((response => response.data))
    },
    getMovieTrailer(id: string) {
        return instance.get<{ id: number, results: InfoMovieTrailer[] }>(`/movie/${id}/videos?api_key=e5bf0d2a91e3d8acf07245cbd2950b9f&language=en-US`)
            .then(response => response.data.results[0])
    },
    async getSimilarMovies(id: string) {
        const response = await instance.get<GetMoviesApiResponse>(`/movie/${id}/similar?api_key=e5bf0d2a91e3d8acf07245cbd2950b9f&language=en-US`);
        return response.data.results;
    },
    async getPopularMovies(currentPage: number): Promise<GetMoviesApiResponse | void> {
        try {
            const response = await instance.get<GetMoviesApiResponse>(`/movie/popular?api_key=e5bf0d2a91e3d8acf07245cbd2950b9f&language=en-US&page=${currentPage}`);
            return response.data;
        } catch (err) {
            return console.error(err);
        }
    },
    async getMoviesBySearch(searchMovie: string, currentPage: number): Promise<GetMoviesApiResponse | void> {
        try {
            if (searchMovie !== '') {
                const response = await instance.get<GetMoviesApiResponse>(`/search/movie?api_key=4b8235a2493fa47038f86ca8c6056b47&language=en&query=${searchMovie}&page=${currentPage}`);
                return response.data;
            }
        } catch (err) {
            return console.error(err);
        }
    }

}