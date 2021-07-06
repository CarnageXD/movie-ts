import React, { useEffect } from 'react'
import { useState } from 'react'
import { MovieList } from '../../components/MovieList/MovieList'
import { MoviesDetailsApiResponse } from '../../types/movieTypes'

export const SavedMovies = () => {
    const [savedMovies, setSavedMovies] = useState<MoviesDetailsApiResponse[]>([])

    useEffect(() => {
        const localSavedMovies = localStorage.getItem("saved")
        const savedMovies = localSavedMovies ? JSON.parse(localSavedMovies) : []
        setSavedMovies(savedMovies)
    }, [])

    return (
        <div className="flex flex-wrap">
            {savedMovies.length > 0
                ?
                <MovieList movies={savedMovies} />
                :
                <h2 className="text-xl text-gray">There no saved movies by now</h2>}

        </div>
    )
}
