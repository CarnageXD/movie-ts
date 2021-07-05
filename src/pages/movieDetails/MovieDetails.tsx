import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ActionButton } from '../../components/common/ActionButton'
import { MoviesDetailsApiResponse, InfoMoviesType, InfoMovieTrailer } from '../../types/movieTypes'

export const MovieDetails: React.FC = () => {
    const [detailedMovie, setDetailedMovie] = useState<MoviesDetailsApiResponse | null>(null)
    const [trailers, setTrailers] = useState<InfoMovieTrailer>({})
    const [similarMovies, setSimilarMovies] = useState<InfoMoviesType[]>([])

    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        axios.get<MoviesDetailsApiResponse>(`https://api.themoviedb.org/3/movie/${id}?api_key=e5bf0d2a91e3d8acf07245cbd2950b9f&language=en-U`).then((resp) => setDetailedMovie(resp.data))
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=e5bf0d2a91e3d8acf07245cbd2950b9f&language=en-US`)
            .then((resp) => setTrailers(resp.data.results[0]))
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=e5bf0d2a91e3d8acf07245cbd2950b9f&language=en-US`)
            .then((resp) => setSimilarMovies(resp.data.results))

    }, [id])

    if (similarMovies.length > 10) similarMovies.length = 10

    return (
        <div className="text-gray leading-loose">
            <div className="flex">
                <div className="flex-2 mr-10 flex flex-col items-center">
                    <div className="relative">
                        {detailedMovie?.vote_average ?
                            <div className="flex items-center justify-center absolute w-9 h-9 bg-yellow-400 rounded-full index-10 top-3 right-3 text-black font-semibold">
                                {detailedMovie?.vote_average}
                            </div>
                            : null
                        }
                        <img className="h-imgList w-imgList" src={`https://image.tmdb.org/t/p/w500${detailedMovie?.poster_path}`} alt="poster" />
                    </div>
                    <ActionButton text="Watch trailer" />
                </div>

                <div className="flex flex-col flex-1 relative">

                    {/* Description */}
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <img height={16} width={16} src="/img/icons/clock.png" alt="" />
                            <span className="ml-1">{detailedMovie?.runtime} minutes</span>
                        </div>
                    </div>
                    <div className="mt-3 mb-3">
                        <span>{detailedMovie?.release_date?.slice(0, 4)}</span>
                        <h2 className="text-5xl text-white">{detailedMovie?.original_title}</h2>
                        <p className="italic">{detailedMovie?.tagline}</p>
                    </div>
                    <ul className="flex mb-4 text-2xl list-disc ml-5">
                        {detailedMovie?.genres?.map(genre => <li className="mr-10">{genre.name}</li>)}
                    </ul>
                    <div className="mb-4 text-xl leading-loose">
                        <div>Status: {detailedMovie?.status}</div>
                    </div>
                    <div className="p-3 bg-gray-light">{detailedMovie?.overview}</div>
                    <div className="absolute top-0 right-0">
                        <ActionButton text='Add to watch later' />
                    </div>

                    {/* Similar movies */}
                    <div>
                        {
                            similarMovies.length > 0 ?
                                <>
                                    <h2 className='text-3xl mt-8'>Similar to {detailedMovie?.original_title}: </h2>
                                    <div className="flex flex-wrap justify-between mt-4">
                                        {
                                            similarMovies.map(movie => {
                                                return <div className="flex flex-col items-center">
                                                    <div>
                                                        <NavLink to={`./${movie.id}`}><img className="h-64 w-48" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
                                                        </NavLink>
                                                    </div>
                                                    <h2 className="w-48 text-xl text-white p-2 whitespace-nowrap overflow-hidden overflow-ellipsis text-center">{movie.original_title}</h2>
                                                </div>
                                            })}
                                    </div>
                                </>
                                :
                                null
                        }
                    </div>
                    {
                        // <div>
                        //     <iframe width="450" height="350" src={`https://www.youtube.com/embed/${trailers.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        // </div>
                    }
                </div>
            </div>
        </div>
    )
}
