import React from 'react'

export const Film = () => {
    return (
        <div className="max-w-xs py-10 px-4">
            <div>
                <img width={300} height={400} src="https://image.tmdb.org/t/p/w500//yvmKPlTIi0xdcFQIFcQKQJcI63W.jpg" alt="poster" />
            </div>
            <div className="flex items-center flex-col">
                <h2 className="text-xl text-white p-2 flex-wrap text-center">Shawshank Redemption</h2>
                <p className="hover:bg-white hover:text-black transition-all cursor-pointer p-2 text-gray text-lg border-2 w-52 text-center">More details</p>
            </div>
        </div>
    )
}
