import React from 'react';
import './navibar.css'

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
        <div>
            <div className="BigDiv">{navigationTopics}</div>
        </div>
    )

        ;

}
export default NaviBar;
