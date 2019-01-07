import React, { Component, Fragment } from 'react';

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
                    <ul>
                        <li><a href=" "><i className="fa fa-home"></i> <span>Home</span></a></li>
                        <li><a href=" "><i className="fa fa-github"></i> <span>Dashboard</span></a></li>
                        <li className="active"><a href=" "><i className="fa fa-user-circle"></i> <span>About</span></a></li>
                        <li><a href=" "><i className="fa fa-address-book"></i> <span>Test</span></a></li>
                        <li><a href=" "><i className="fa fa-money"></i> <span>Buy</span></a></li>
                        <li><a href=" "><i className="fa fa-phone"></i> <span>Contact</span></a></li>
                    </ul>

                    <button className="navBarButton" onClick={this.navLess}><i className="fa fa-bars"></i></button>
                </header>
            </Fragment> 
        )
    }
}

export default Header;