import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { MovieDetails } from './pages/movieDetails/MovieDetails'
import { SavedMovies } from './pages/savedMovies/SavedMovies'
import { SearchBy } from './pages/search/SearchBy'
import { Trends } from './pages/trends/Trends'

export const App: React.FC = () => {
  return (
    <div className="bg-gray-dark font-body ">
      <div className="p-10">
        <Header />
        <div className="container mx-auto p-10 bg-gray-darkest border-b-2 rounded-b-lg border-gray-darkest ">
          <Switch>
            <Route exact path="/"><Trends /></Route>
            <Route path="/trends">
              <Trends />
            </Route>
            <Route path="/search">
              <SearchBy />
            </Route>
            <Route path="/details/:id">
              <MovieDetails />
            </Route>
            <Route path="/saved">
              <SavedMovies />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}
