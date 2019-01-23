import React, { Component, Fragment } from 'react';
import {apiRest} from '../../services/api';

class Wordpress extends Component {

    componentDidMount () {
        apiRest.get().then(resp => {
            console.log(resp.data);
        });
    }

    render() {
        return (
            <Fragment>
                <main>
                    <section>
                        <h2 className="title">Wordpress</h2>
                    </section>
                </main>
            </Fragment> 
        )
    }
}

export default Wordpress;