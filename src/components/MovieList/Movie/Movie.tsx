import React from 'react'

type MoviePropsType = {
    poster?: string | null
    title?: string
    release?: string
    description?: string

}

export const Movie: React.FC<MoviePropsType> = ({ poster, title, description, release }) => {
    return (
        <div className="max-w-xs py-10 px-4 relative">
            <div className="before: ">
                {poster ?
                    <img className="block h-imgList w-imgList hover:filter" src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" />
                    : <div className="h-imgList w-imgList border-2 text-gray flex items-center justify-center">
                        <h2>Poster in unavailable</h2>
                    </div>
                }
                <div className="flex items-center flex-col">
                    <h2 className="w-full text-xl text-white p-2 whitespace-nowrap overflow-hidden overflow-ellipsis text-center">{title}</h2>
                    <p className="hover:bg-white hover:text-black transition-all cursor-pointer p-2 text-gray text-lg border-2 w-52 text-center">More details</p>
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
