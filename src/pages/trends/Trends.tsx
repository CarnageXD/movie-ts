import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Paginator } from '../../components/Paginator/Paginator'
import { MovieList } from '../../components/MovieList/MovieList'
import { InfoMoviesType } from '../../types/movieTypes'
import { getMoviesDataAPI } from '../../api'

export const Trends: React.FC<InfoMoviesType> = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [movies, setMovies] = useState<InfoMoviesType[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPagesCount, setTotalPagesCount] = useState<number>(1)

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const data = await getMoviesDataAPI.getPopularMovies(currentPage)
            if (data) {
                setTotalPagesCount(data.total_pages)
                setMovies(data.results)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [currentPage])

    const onPageChanged = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <div>
            <div>
                <div className="flex justify-between flex-col items-center md:items-start md:flex-row md:flex-wrap">
                    <MovieList isLoading={isLoading} movies={movies} />
                </div>
                <div>
                    {isLoading ? null : <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalPagesCount={totalPagesCount} />}

                </div>
            </div>

        </div>
    )
}
