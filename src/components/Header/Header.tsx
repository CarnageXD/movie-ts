import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header: React.FC = () => {
    return (
        <div className="container mx-auto ">
            <div className="flex justify-between items-center px-8 py-2 bg-gray-lightest border-t-2 rounded-t-lg border-gray-lightest flex-col md:flex-row">
                <div className="pt-2 pb-2">
                    <NavLink to='/trends'>
                        <div className="flex items-center">
                            <img className="lg:w-12 lg:h-12 sm:w-8 sm:h-8 h-8 w-8 " src="/img/icons/logo.png" alt="siteLogo" />
                            <p className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-white">Movielike</p>
                        </div>
                    </NavLink>
                </div>
                <div className="p-2 whitespace-nowrap">
                    <nav>
                        <ul className=" flex space-x-10 text-sm md:text-lg text-white font-body font-semibold md:font-bold md:uppercase ">
                            <NavLink to='/trends'>
                                <li className="cursor-pointer hover:text-yellow-400">Trends</li>
                            </NavLink>
                            <NavLink to='/search'>
                                <li className="cursor-pointer hover:text-yellow-400">Search by</li>
                            </NavLink>
                            <NavLink to='/saved'>
                                <li className="cursor-pointer hover:text-yellow-400">Watch later</li>
                            </NavLink>
                        </ul>
                    </nav>
                </div>
                {/* <button className="inline-block md:hidden w-8 h-8 bg-gray-600 text-gray-200 p-1">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button> */}
            </div>
        </div>
    )
}
