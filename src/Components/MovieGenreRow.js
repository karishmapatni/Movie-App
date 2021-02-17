import React, {useContext} from 'react'
import MovieTile from './MovieTile'
import { MovieContext } from '../Context/MovieContext'

function MovieGenreRow() {
    const { trendingMovies, dramaMovies, actionMovies, animationMovies, handleSeeAllClick } = useContext(MovieContext);

    return (
        <>
            <div className="genre-row">
                <div className="genre-row-header">
                    <h3>Trending Movies</h3>
                    <button className="row-button" onClick={(e) => {handleSeeAllClick(e, trendingMovies, 'Trending Movies')}}>See all</button>
                </div>
                <div className="genre-row-content">
                    {trendingMovies.results && trendingMovies.results.slice(0, 5).map((movieItem, index) => (
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

            <div className="genre-row">
                <div className="genre-row-header">
                    <h3>Drama Movies</h3>
                    <button className="row-button" onClick={(e) => {handleSeeAllClick(e, dramaMovies, 'Drama Movies')}}>See all</button>
                </div>
                <div className="genre-row-content">
                    {dramaMovies.results && dramaMovies.results.slice(0, 5).map((movieItem, index) => (
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

            <div className="genre-row">
                <div className="genre-row-header">
                    <h3>Action Movies</h3>
                    <button className="row-button" onClick={(e) => {handleSeeAllClick(e, actionMovies, 'Action Movies')}}>See all</button>
                </div>
                <div className="genre-row-content">
                    {actionMovies.results && actionMovies.results.slice(0, 5).map((movieItem, index) => (
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

            <div className="genre-row">
                <div className="genre-row-header">
                    <h3>Animation Movies</h3>
                    <button className="row-button" onClick={(e) => {handleSeeAllClick(e, animationMovies, 'Animation Movies')}}>See all</button>
                </div>
                <div className="genre-row-content">
                    {animationMovies.results && animationMovies.results.slice(0, 5).map((movieItem, index) => (
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
        </>
    )
}

export default MovieGenreRow