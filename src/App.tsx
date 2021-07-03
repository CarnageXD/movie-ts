import React from 'react'
import { Header } from './components/Header/Header'
import { Trends } from './pages/trends/Trends'

type AppPropsType = {

}

export const App: React.FC<AppPropsType> = () => {
  return (
    <div className="bg-gray-dark font-body">
      <div className="p-10">
        <Header />
        <div className="container mx-auto p-10 bg-gray-darkest border-b-2 rounded-b-lg border-gray-darkest">
          <Trends />
        </div>
      </div>
    </div>
  )
}
