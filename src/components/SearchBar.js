import React from 'react'

const SearchBar = ({search, setSearch}) => {
    return (
        <>
         <input onChange={(e) => setSearch(e.target.value)} value={search} className="search-bar" placeholder="Enter a city..."/>   
        </>
    )
}

export default SearchBar
