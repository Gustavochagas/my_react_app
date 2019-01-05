import React, { Fragment } from 'react';

import 'font-awesome/css/font-awesome.css';


const Header = () => (
    <Fragment>
        <h2>Header Component</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <i className="fa fa-bars"></i>
    </Fragment> 
);

export default Header;