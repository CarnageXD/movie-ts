import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Paginator } from '../../components/Paginator/Paginator'
import { MovieList } from '../../components/MovieList/MovieList'
import { GetMoviesApiResponse, InfoMoviesType } from '../../types/movieTypes'

export const SearchBy: React.FC<InfoMoviesType> = () => {
    const [movies, setMovies] = useState<InfoMoviesType[]>([])
    const [searchMovie, setSearchMovie] = useState<string>('')
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPagesCount, setTotalPagesCount] = useState<number>(1)

    useEffect(() => {
        onSearchClicked()
    }, [currentPage])

    const onPageChanged = (page: number) => {
        setCurrentPage(page)
    }

    const searchQueryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchMovie(e.target.value)
    }

    const onSearchClicked = () => {
        axios.get<GetMoviesApiResponse>(`https://api.themoviedb.org/3/search/movie?api_key=4b8235a2493fa47038f86ca8c6056b47&language=en&query=${searchMovie}&page=${currentPage}`).then(resp => {
            setMovies(resp.data.results)
            setTotalPagesCount(resp.data.total_pages)
        })
    }
    return (
        <div>
            <div className="w-full rounded-lg bg-gray-light flex items-center">
                <input onChange={searchQueryHandler} className="w-full border-0 p-3 bg-transparent outline-none text-gray " placeholder="Search something, for example 'Shawshank Redemption'..."></input>
                <img onClick={onSearchClicked} className="pr-4 cursor-pointer" src='/img/icons/search.png' alt="searchButton" />
            </div>
            <div>
                <div className="flex justify-between flex-wrap">
                    <MovieList movies={movies} />
                </div>
                <div>
                    {totalPagesCount > 1 ? <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalPagesCount={totalPagesCount} /> : null}

                </div>
            </div>
        </div>
    )
}
