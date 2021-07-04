import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Film } from '../../components/Film/Film'
import { useEffect } from 'react'

type trendMoviesType = {
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

export const Trends: React.FC<trendMoviesType> = () => {
    const [movies, setMovies] = useState<trendMoviesType[]>([])
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e5bf0d2a91e3d8acf07245cbd2950b9f&language=en-US&page=2")
            .then((resp) => setMovies(resp.data.results))

    }, [])

    return (
        <div>
            <div className="w-full rounded-lg bg-gray-light flex items-center">
                <input className="w-full border-0 p-3 bg-transparent outline-none text-gray " placeholder="Search..."></input>
                <img className="pr-4 cursor-pointer" src='/img/icons/search.png' alt="searchButton" />
            </div>
            <div>
                <div className="flex justify-between flex-wrap">
                    {
                        movies.map(movie => <Film poster={movie.poster_path} title={movie.original_title} />)
                    }
                </div>
            </div>
            <div>hot</div>
            <div>filter</div>
        </div>
    )
}
