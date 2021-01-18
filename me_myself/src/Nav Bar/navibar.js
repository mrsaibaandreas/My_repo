import React from 'react';
import './navibar.css'
import SearchBar from "./SearchBar/searchbar";
const NaviBar = () => {

    const topics = [
        {
            name: 'Home',
            route: '/home',
            id: 0,

        },
        {
            name: 'About page',
            route: '/about',
            id: 1,
        },
        {
            name: 'Contact',
            route: '/contact',
            id: 2,
        },
        {
            name: 'Projects',
            route: '/projects',
            id: 3,
        }
    ];
    let navigationTopics = topics.map((key) => {
        return <div className="CSS" id={key.id}>{key.name}</div>
    });


    return (
        <div className="container">
            <div className="item">{navigationTopics}</div>
            <SearchBar className="SearchBar"/>
        </div>
    )

        ;

}
export default NaviBar;
