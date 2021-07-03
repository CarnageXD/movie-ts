import React from 'react'
import { Film } from '../../components/Film/Film'

export const Trends = () => {
    return (
        <div>
            <div className="w-full rounded-lg bg-gray-light flex items-center">
                <input className="w-full border-0 p-3 bg-transparent outline-none text-gray " placeholder="Search..."></input>
                <img className="pr-4 cursor-pointer" src='/img/icons/search.png' alt="searchButton" />
            </div>
            <div>
                <div className="flex justify-between flex-wrap">
                    <Film />
                    <Film />
                    <Film />
                    <Film />
                    <Film />
                    <Film />
                    <Film />
                    <Film />
                </div>
            </div>
            <div>hot</div>
            <div>filter</div>
        </div>
    )
}
