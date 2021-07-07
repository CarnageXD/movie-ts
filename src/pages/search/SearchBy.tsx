import React, { useEffect, useState } from 'react'
import { Paginator } from '../../components/Paginator/Paginator'
import { MovieList } from '../../components/MovieList/MovieList'
import { InfoMoviesType } from '../../types/movieTypes'
import { getMoviesDataAPI } from '../../api'
import searchIcon from './../../assets/icons/search.png'


export const SearchBy: React.FC<InfoMoviesType> = () => {
    const [movies, setMovies] = useState<InfoMoviesType[]>([])
    const [searchMovie, setSearchMovie] = useState<string>('')
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPagesCount, setTotalPagesCount] = useState<number>(1)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const data = await getMoviesDataAPI.getMoviesBySearch(searchMovie, currentPage)
            if (data) {
                setMovies(data.results)
                setTotalPagesCount(data.total_pages)
            }
            else setMovies([])
            setIsLoading(false)
        }
        fetchData()

    }, [currentPage, searchMovie])

    const onPageChanged = (page: number) => {
        setCurrentPage(page)
    }

    const searchQueryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchMovie(e.target.value)
    }

    return (
        <div>
            <div className="w-full rounded-lg bg-gray-light flex items-center mb-10">
                <input onChange={searchQueryHandler} className="w-full border-0 p-3 bg-transparent outline-none text-gray " placeholder="Search something, for example 'The Shawshank Redemption'..."></input>
                <img className="pr-4 cursor-pointer" src={searchIcon} alt="searchButton" />
            </div>
            <div>
                <div className="flex justify-between flex-col items-center md:items-start md:flex-row md:flex-wrap">
                    <MovieList isLoading={isLoading} movies={movies} />
                </div>
                {isLoading || movies.length === 0 ? null :
                    <div>
                        {totalPagesCount > 1 ? <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalPagesCount={totalPagesCount} /> : null}
                    </div>
                }
            </div>
        </div>
    )
}
