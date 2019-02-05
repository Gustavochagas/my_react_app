import React, { Component, Fragment } from 'react';
import {apiRest} from '../../services/api';

import WordpressStyles from '../wordpress/style';

class Wordpress extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        apiRest.get().then(resp => {
            resp.data.map(item => 
                this.setState({ 
                    posts: [...this.state.posts, item] 
                })
            )
            console.log(this.state.posts);
        });
    }

    render() {
        return (
            <Fragment>
                <WordpressStyles />
                <main>
                    <section>
                        <h2 className="title">Wordpress</h2>
                    </section>
                    <section>
                        <div className="posts">
                        {this.state.posts.map(item => (
                            <div className="post" key={item.id}>
                                <h2>{item.title.rendered}</h2>
                                <p>{item.date}</p>
                            </div>
                        ))}
                        </div>
                    </section>
                </main>
            </Fragment> 
        )
    }
}

export default Wordpress;