import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Paginator } from '../../components/Paginator/Paginator'
import { MovieList } from '../../components/MovieList/MovieList'
import { PopularMovieApiResponse, TrendMoviesType } from '../../types/movieTypes'

export const Trends: React.FC<TrendMoviesType> = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [movies, setMovies] = useState<TrendMoviesType[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPagesCount, setTotalPagesCount] = useState<number>(1)

    useEffect(() => {
        axios.get<PopularMovieApiResponse>(`https://api.themoviedb.org/3/movie/popular?api_key=e5bf0d2a91e3d8acf07245cbd2950b9f&language=en-US&page=${currentPage}`)
            .then((resp) => {
                setIsLoading(true)
                console.log(resp.data)
                setTotalPagesCount(resp.data.total_pages)
                setMovies(resp.data.results)
                setIsLoading(false)
            })
    }, [currentPage])

    const onPageChanged = (page: number) => {
        setCurrentPage(page)
    }

    return (
        isLoading ? <h2>Loading...</h2> :
            <div>
                <div>
                    <div className="flex justify-between flex-wrap">
                        <MovieList movies={movies} />
                    </div>
                    <div>
                        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalPagesCount={totalPagesCount} />
                    </div>
                </div>
                {/* <div>hot</div>
            <div>filter</div> */}
            </div>
    )
}
