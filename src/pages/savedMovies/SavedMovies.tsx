import React, { useEffect } from 'react'
import { useState } from 'react'
import { ActionButton } from '../../components/common/buttons/ActionButton'
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
    }, [savedMovies])

    const clearItems = () => {
        const localeSavedMovies = localStorage.getItem("saved")
        if (localeSavedMovies) {
            localStorage.removeItem("saved")
        }
    }

    return (
        <div>
            {savedMovies.length > 0
                ?
                <div>
                    <div onClick={() => clearItems()} className="w-full flex justify-center">
                        <ActionButton text='Clear watch later' />
                    </div>
                    <div className="flex justify-between flex-col items-center md:items-start md:flex-row md:flex-wrap">
                        <MovieList isLoading={isLoading} movies={savedMovies} />
                    </div>
                </div>
                :
                <h2 className="text-xl text-gray">There are no saved movies by now</h2>}

        </div>
    )
}
