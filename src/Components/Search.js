import React, { useContext } from 'react'
import { MovieContext } from '../Context/MovieContext' 

function Search() {
    const {search, setSearch, handleSearch} = useContext(MovieContext);

    return (
        <form onSubmit={handleSearch}>
            <input 
                type="text" 
                placeholder="Search movies"
                onChange={(e) => setSearch(e.target.value)}
                value={search} />
        </form>
    )
}

export default Search