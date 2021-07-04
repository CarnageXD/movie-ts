import React from 'react'

type MoviePropsType = {
    poster?: string | null
    title?: string

}

export const Movie: React.FC<MoviePropsType> = ({ poster, title }) => {
    return (
        <div className="max-w-xs py-10 px-4">
            <img className="block h-imgList w-full" src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" />
            <div className="flex items-center flex-col">
                <h2 className="w-full text-xl text-white p-2 whitespace-nowrap overflow-hidden overflow-ellipsis text-center">{title}</h2>
                <p className="hover:bg-white hover:text-black transition-all cursor-pointer p-2 text-gray text-lg border-2 w-52 text-center">More details</p>
            </div>
        </div>
    )
}
