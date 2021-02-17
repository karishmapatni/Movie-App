import React from 'react'

function MovieTile( {title, image, vote_average, release_date}) {
    return (          
        <div className="movie-tile">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w300${image}`} alt=""/>
            </div>
            <h5 className="movie-name">{title}</h5>
            <div className="tile-metadata">
                <p>{release_date !== '' ? new Date(release_date).getFullYear() : 'N/A'}</p>
                <div className="dot-separator">·</div>
                <p>{vote_average}</p>
            </div>
        </div>
    )
}

export default MovieTile