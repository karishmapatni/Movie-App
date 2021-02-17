import React, { useState, useEffect, createContext } from 'react';

export const MovieContext = createContext();

export const MovieState = ({children}) => {
    const [search, setSearch] = useState('');
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [dramaMovies, setDramaMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [animationMovies, setAnimationMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const [searchByGenre, setSearchByGenre] = useState(true);
    const [moviesTitle, setMoviesTitle] = useState('');

    const API_KEY = "3496e3d67955f61342839148def172b1";

    const getTrendingMovies = async () => {
        if (search.trim() === '') {
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
            const data = await response.json()
            setTrendingMovies(data)
        }  
    }

    const getDramaMovies = async () => {
        if (search.trim() === '') {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18&sort_by=vote_average.desc`)
            const data = await response.json()
            setDramaMovies(data)
        }  
    }

    const getActionMovies = async () => {
        if (search.trim() === '') {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=vote_average.desc`)
            const data = await response.json()
            setActionMovies(data)
        }  
    }

    const getAnimationMovies = async () => {
        if (search.trim() === '') {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=vote_average.desc`)
            const data = await response.json()
            setAnimationMovies(data)
        }  
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        if(search.trim() !== ''){
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}`)
            const data = await response.json();
            if(data.results && data.results.length > 0){
                setMovies(data);
                setMoviesTitle('Search Results for: "' + search.trim() + '"');
                setSearchByGenre(false);
            } else{
                setMoviesTitle('No Results Found For: "' + search.trim() + '"');
                setSearchByGenre(false);
            }           
        }
    }

    const handleSeeAllClick = (e, data, title) => {
        e.preventDefault();
        setSearchByGenre(false);
        setMoviesTitle(title);
        setMovies(data);
    }

    useEffect (() => {
        getTrendingMovies()
    }, [])

    useEffect (() => {
        getDramaMovies()
    }, [])

    useEffect (() => {
        getActionMovies()
    }, [])

    useEffect(() => {
        getAnimationMovies();
    }, [])

    return (
        <MovieContext.Provider
            value={{
                search,
                setSearch,
                trendingMovies,
                setTrendingMovies,
                handleSearch,
                dramaMovies,
                setDramaMovies,
                actionMovies,
                setActionMovies,
                animationMovies,
                setAnimationMovies,
                searchByGenre,
                setSearchByGenre,
                movies,
                setMovies,
                handleSeeAllClick,
                moviesTitle,
                setMoviesTitle
            }}>
            {children}
        </MovieContext.Provider>
    )
}