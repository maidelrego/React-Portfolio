import React from 'react';
import './nav.css';


export default function MyNav() {

    return (
        <div className='nav-container'>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
    );
}