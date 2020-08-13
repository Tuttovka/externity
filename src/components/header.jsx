import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../logo.png';

export function Navigation() {
    return (
        <div className="nav">
            <div className="container-logo">
                    <a href="/"><img src={logo} class="ext-logo" alt="externity logo"/></a>
            </div> 
        </div>


);
}

