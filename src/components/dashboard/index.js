import React, { Component, Fragment } from 'react';
import api from '../../services/api';

import 'font-awesome/css/font-awesome.css';

import DashboardStyles from './style';

class Dashboard extends Component {
    state = {
        loading: true,
    }

    componentDidMount () {
        this.setState({ loading: false });
        api.get(`/users/Gustavochagas`).then(resp => {
            console.log(resp.data);
            const followers = document.querySelector("#followers");
            const following = document.querySelector("#following");
            const repos = document.querySelector("#repos");
            const gists = document.querySelector("#gists");
            const name = document.querySelector("#name");
            const location = document.querySelector("#location");
            const access = document.querySelector("#access");

            followers.textContent = resp.data.followers;
            following.textContent = resp.data.following;
            repos.textContent = resp.data.public_repos;
            gists.textContent = resp.data.public_gists;
            name.textContent = resp.data.name;
            location.textContent = resp.data.location;
            access.href = resp.data.html_url;
        });
        this.setState({ loading: true });
    }

    render() {
        return (
            <Fragment>
                <DashboardStyles />
                <main>
                    <section>
                        <h2 className="title">Dashboard GitHub</h2>

                        <div className="git__top">
                            <div className="top__blocks">
                                <h2 className="block__title">Name</h2>
                                <span id="name">{ this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK' }</span>
                            </div>
                            <div className="top__blocks">
                                <h2 className="block__title">Location</h2>
                                <span id="location">{ this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK' }</span>
                            </div>
                            <a href=" " id="access" target="_blank">Acessar</a>
                        </div>
                        <div className="blocks">
                            <div className="block">
                                <h2 className="block__title">Followers</h2>
                                <span id="followers">{ this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK' }</span>
                            </div>
                            <div className="block">
                                <h2 className="block__title">Following</h2>
                                <span id="following">{ this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK' }</span>
                            </div>
                            <div className="block">
                                <h2 className="block__title">Repos</h2>
                                <span id="repos">{ this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK' }</span>
                            </div>
                            <div className="block">
                                <h2 className="block__title">Gists</h2>
                                <span id="gists">{ this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK' }</span>
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment> 
        )
    }
}

export default Dashboard;