import React from 'react';
import './searchbar.css'
const SearchBar = (props) =>{
    return(
        <div className="container-search">
        <input className="SearchBar" placeholder="What you think about?"/>
        <div className="item-search">Search</div>
        </div>
    )
};
export default SearchBar;
