import React, {useContext} from 'react'
import MovieTile from './MovieTile'
import { MovieContext } from '../Context/MovieContext'

function Movies() {
    const { movies, moviesTitle } = useContext(MovieContext);

    return (
            <div className="genre-row">
                <div className="genre-row-header">
                    <h3>{moviesTitle}</h3>
                </div>
                <div className="genre-row-content">
                    {movies.results && movies.results.map((movieItem, index) => (
                        <MovieTile 
                            title={movieItem.title}
                            image={movieItem.poster_path}
                            key={index}
                            id={movieItem.id}
                            vote_average={movieItem.vote_average}
                            release_date={movieItem.release_date} />
                    ))}
                </div>
            </div>
    )
}

export default Movies