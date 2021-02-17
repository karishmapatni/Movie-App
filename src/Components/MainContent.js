import React, {useContext} from 'react'
import MovieGenreRow from './MovieGenreRow'
import Movies from './Movies'
import { MovieContext } from '../Context/MovieContext'

function MainContent() {
    const { searchByGenre } = useContext(MovieContext);
    return (
        <div className="main-container">
            {searchByGenre ?
                <MovieGenreRow />
                :
                <Movies />
            }
        </div>
    )
}

export default MainContent