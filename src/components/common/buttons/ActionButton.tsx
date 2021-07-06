import React from 'react'

export const ActionButton: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className="font-bold p-2 mt-4 mb-2 hover:bg-yellow-400 hover:text-black transition-all rounded-xl text-gray text-lg border-2 w-52 hover:border-yellow-400 text-center cursor-pointer">{text}</div>
    )
}
