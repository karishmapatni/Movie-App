import React from 'react'

function AppLogo() {
    return (
        <a href="" onClick={(e) => e.preventDefault}>
            <div className="app-logo">
                <i className="material-icons md-36 logo-icon">movie_creation</i>
                <h3>Movie Search</h3>
            </div>
        </a>
    )
}

export default AppLogo