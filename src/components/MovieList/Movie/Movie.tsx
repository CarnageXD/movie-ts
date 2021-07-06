import React from 'react'
import { NavLink } from 'react-router-dom'
import { MoviePropsType } from '../../../types/movieTypes'
import { ActionButton } from '../../common/buttons/ActionButton'
import { Preloader } from '../../common/preloader/Preloader'

export const Movie: React.FC<MoviePropsType> = ({ poster, title, description, release, id, score, isLoading }) => {
    return (
        <>
            {isLoading ? <Preloader /> :
                <div className="w-imgList py-10 relative mt-8">
                    <div>
                        <div className="relative">
                            {score ?
                                <div className="flex items-center justify-center absolute w-9 h-9 bg-yellow-400 rounded-full index-10 top-3 right-3 text-black font-semibold">
                                    {(score - 1).toPrecision(2)}
                                </div>
                                : null
                            }
                        </div>
                        <div>
                            <div>
                                {poster ?
                                    <img className="h-imgList w-imgList" src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" />
                                    : <div className="h-imgList w-imgList border-2 text-gray flex items-center justify-center">
                                        <h2>Poster in unavailable</h2>
                                    </div>
                                }
                            </div>
                            <div className="leading-loose text-gray-200 h-imgList w-imgList p-3 absolute top-10 left-0 opacity-0 hover:opacity-100 hover:bg-gray-lightest hover:bg-opacity-80 transition-all overflow-hidden overflow-ellipsis flex flex-col items-center justify-center text-sm">
                                {description}
                            </div>
                        </div>
                        <div className="flex items-center flex-col">
                            <h2 className="w-full text-xl text-white p-2 whitespace-nowrap overflow-hidden overflow-ellipsis text-center">{title}</h2>
                            <NavLink to={`/details/${id}`}>
                                <ActionButton text="More details" />
                            </NavLink>
                        </div>
                    </div>
                </div>}
        </>
    )
}
