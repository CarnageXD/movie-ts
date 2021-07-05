import React from 'react'
import { NavLink } from 'react-router-dom'
import { ActionButton } from '../../common/ActionButton'

type MoviePropsType = {
    poster?: string | null
    title?: string
    release?: string
    description?: string
    id?: number
    score?: number
}

export const Movie: React.FC<MoviePropsType> = ({ poster, title, description, release, id, score }) => {
    return (
        <div className="max-w-xs py-10 px-4 relative">
            <div>
                <div className="relative">
                    {score ?
                        <div className="flex items-center justify-center absolute w-9 h-9 bg-yellow-400 rounded-full index-10 top-3 right-3 text-black font-semibold">
                            {score}
                        </div>
                        : null
                    }
                </div>
                {poster ?
                    <img className="block h-imgList w-imgList" src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" />
                    : <div className="h-imgList w-imgList border-2 text-gray flex items-center justify-center">
                        <h2>Poster in unavailable</h2>
                    </div>
                }
                <div className="flex items-center flex-col">
                    <h2 className="w-full text-xl text-white p-2 whitespace-nowrap overflow-hidden overflow-ellipsis text-center">{title}</h2>
                    <NavLink to={`/details/${id}`}>
                        <ActionButton text="More details" />
                    </NavLink>
                </div>
            </div>
            <div className="leading-loose text-gray-200 h-imgList w-imgList p-4 absolute top-10 left-4 opacity-0 hover:opacity-100 hover:bg-gray-lightest hover:bg-opacity-80 transition-all overflow-hidden overflow-ellipsis">
                <div>Title: {title} </div>
                <div>Genres: action, triller </div>
                <div>Release: {release} </div>
                <div>Description: {description}</div>
            </div>
        </div>
    )
}
