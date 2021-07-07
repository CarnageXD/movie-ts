import React from 'react'

export type PaginatorPropsType = {
    currentPage: number,
    onPageChanged: (currentPage: number) => void
    totalPagesCount: number
}

export const Paginator: React.FC<PaginatorPropsType> = ({ currentPage, onPageChanged, totalPagesCount }) => {
    const pages = []
    if (totalPagesCount > 10) {
        if (currentPage + 5 > totalPagesCount) {
            for (let i = totalPagesCount - 5; i <= totalPagesCount; i++) {
                pages.push(i)
            }
        }
        else if (currentPage > 5) {
            for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                pages.push(i)
            }
        }
        else {
            for (let i = 1; i < 10; i++) {
                pages.push(i)
            }
        }
    }
    else {
        for (let i = 1; i <= totalPagesCount; i++) {
            pages.push(i)
        }
    }
    return (
        <div>
            <div className="flex text-gray items-center justify-around mt-12 hidden md:flex">
                {currentPage > 5 ? <div onClick={() => (onPageChanged(1))} className="hover:text-yellow-400 transition-all cursor-pointer mr-2">В начало</div> : null}
                {pages.map(page => <div key={page} onClick={() => onPageChanged(page)}
                    className={`w-12 h-12 border-2 cursor-pointer rounded-full flex items-center justify-center ${page === currentPage ? 'border-yellow-400' : ''} hover:border-yellow-400 transition-all`}
                >{page}</div>)}
                {currentPage !== totalPagesCount ? <div onClick={() => (onPageChanged(totalPagesCount))} className="hover:text-yellow-400 transition-all cursor-pointer ml-2">В конец</div> : null}
            </div>
            <div className="text-4xl text-gray flex justify-between md:hidden">
                <div onClick={() => onPageChanged(--currentPage)} className={`h-16 w-16 border-2 rounded-full text-center leading-relaxed ${currentPage === 1 ? 'invisible' : ''}`}>&#8592;</div>
                <div onClick={() => onPageChanged(++currentPage)} className={`h-16 w-16 border-2 rounded-full text-center leading-relaxed ${currentPage === totalPagesCount ? 'invisible' : ''}`}>&#8594;</div>
            </div>
        </div>
    )
}
