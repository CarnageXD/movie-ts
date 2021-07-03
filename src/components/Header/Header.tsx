import React from 'react'

export const Header: React.FC = () => {
    return (
        <div className="container mx-auto ">
            <div className="flex justify-between items-center px-8 py-2 bg-gray-lightest border-t-2 rounded-t-lg border-gray-lightest">
                <div className="flex items-center">
                    <img width={50} height={50} src="/img/icons/logo.png" alt="siteLogo" />
                    <p className="text-4xl text-white">MOVIELIKE</p>
                </div>
                <div>
                    <nav>
                        <ul className=" flex space-x-10 text-lg text-white font-body uppercase ">
                            <li className="cursor-pointer hover:text-yellow-400">Trends</li>
                            <li className="cursor-pointer hover:text-yellow-400">Search by</li>
                            <li className="cursor-pointer hover:text-yellow-400">Watch later</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
