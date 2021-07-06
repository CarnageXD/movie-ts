import React from 'react'

export const AcceptedButton: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className="p-2 mt-4 mb-2 bg-yellow-400 text-black transition-all rounded-xl text-lg border-2 w-52 border-yellow-400 text-center cursor-pointer">
            <button className="disabled:opacity-50 font-bold" disabled={true}>{text} &#10003;</button></div>
    )
}
