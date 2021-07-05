import React from 'react'
import { InfoMoviesType } from '../../types/movieTypes'
import { Movie } from './Movie/Movie'

export const MovieList: React.FC<{ movies: InfoMoviesType[] }> = ({ movies }) => {
    return (
        <>
            {
                movies.map(movie => <Movie key={movie.id} id={movie.id} poster={movie.poster_path} title={movie.original_title} description={movie.overview} release={movie.release_date} score={movie.vote_average} />)
            }
        </>
    )
}
