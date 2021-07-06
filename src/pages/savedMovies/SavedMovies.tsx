import React, { useEffect } from 'react'
import { useState } from 'react'
import { MovieList } from '../../components/MovieList/MovieList'
import { MoviesDetailsApiResponse } from '../../types/movieTypes'

export const SavedMovies = () => {
    const [savedMovies, setSavedMovies] = useState<MoviesDetailsApiResponse[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        const localSavedMovies = localStorage.getItem("saved")
        const savedMovies = localSavedMovies ? JSON.parse(localSavedMovies) : []
        setSavedMovies(savedMovies)
        setIsLoading(false)
    }, [])

    return (
        <div>
            {savedMovies.length > 0
                ?
                <div className="flex justify-between flex-col items-center md:items-start md:flex-row md:flex-wrap">
                    <MovieList isLoading={isLoading} movies={savedMovies} />
                </div>
                :
                <h2 className="text-xl text-gray">There no saved movies by now</h2>}

        </div>
    )
}
