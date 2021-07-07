import React from 'react'
import { InfoMoviesType, MoviesDetailsApiResponse } from '../../types/movieTypes'
import { Movie } from './Movie/Movie'

export const MovieList: React.FC<{ movies: InfoMoviesType[] | MoviesDetailsApiResponse[]; isLoading: boolean; }> = ({ movies, isLoading }) => {
    return (
        <>
            {
                movies.map(movie => <Movie key={movie.id} isLoading={isLoading} id={movie.id} poster={movie.poster_path} title={movie.original_title} release={movie.release_date} score={movie.vote_average} description={movie.overview} />)
            }
        </>
    )
}
