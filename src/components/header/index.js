import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';

import HeaderStyles from './style';


class Header extends Component {
    state = {
        click: true,
    }

    navLess = (event) => {
        this.setState({click: !this.state.click})
        console.log(this.state.click);
    }

    render() {
        return (
            <Fragment>
                <HeaderStyles />
                <header className={this.state.click ? 'off' : 'on'}>
                    <h2 className="logo">Logo</h2>
                    <BrowserRouter>
                        <ul>
                            <li><Link to="/"><i className="fa fa-github"></i> <span>Home</span></Link></li>
                            <li><Link to="/todos"><i className="fa fa-address-book"></i> <span>Todos</span></Link></li>
                            <li><Link to="/wordpress"><i className="fa fa-phone"></i> <span>Wordpress</span></Link></li>
                        </ul>
                    </BrowserRouter>

                    <button className="navBarButton" onClick={this.navLess}><i className="fa fa-bars"></i></button>
                </header>
            </Fragment> 
        )
    }
}

export default Header;