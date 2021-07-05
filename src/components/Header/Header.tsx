import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header: React.FC = () => {
    return (
        <div className="container mx-auto ">
            <div className="flex justify-between items-center px-8 py-2 bg-gray-lightest border-t-2 rounded-t-lg border-gray-lightest">
                <NavLink to='/trends'>
                    <div className="flex items-center">
                        <img width={50} height={50} src="/img/icons/logo.png" alt="siteLogo" />
                        <p className="text-4xl text-white">MOVIELIKE</p>
                    </div>
                </NavLink>
                <div>
                    <nav>
                        <ul className=" flex space-x-10 text-lg text-white font-body uppercase ">
                            <NavLink to='/trends'><li className="cursor-pointer hover:text-yellow-400">Trends</li></NavLink>
                            <NavLink to='/search'><li className="cursor-pointer hover:text-yellow-400">Search by</li></NavLink>
                            <NavLink to='/favorites'><li className="cursor-pointer hover:text-yellow-400">Watch later</li></NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
