import React from 'react';
import './searchbar.css'
const SearchBar = (props) =>{
    return(
        <div className="container">
        <input className="SearchBar" placeholder="What you think about?"/>
        <div className="item">Search</div>
        </div>
    )
};
export default SearchBar;
