import React from 'react'
import { TrendMoviesType } from '../../types/movieTypes'
import { Movie } from './Movie/Movie'

export const MovieList: React.FC<{ movies: TrendMoviesType[] }> = ({ movies }) => {
    return (
        <>
            {
                movies.map(movie => <Movie key={movie.id} poster={movie.poster_path} title={movie.original_title} description={movie.overview} release={movie.release_date} />)
            }
        </>
    )
}
