import React, { Component, Fragment } from 'react';
import firebase from '../../firebase.js';

import LoginStyles from './style';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            message: '',
            messageDiv: ''
        }
    }

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    authentication = () => {
        let email = this.state.email;
        let pass = this.state.pass;

        this.setState({
            message: 'Loading...',
            messageDiv: 'loading'
        })

        const me = this;

        firebase.auth().signInWithEmailAndPassword(email, pass).then(function(result) {
            console.log(result);
            me.setState({
                message: 'Logado',
                messageDiv: 'logado'
            })

        }).catch(function(error) {
            var errorCode = error.code;

            if (errorCode === 'auth/wrong-password') {
                me.setState( {
                    message: 'Wrong Password',
                    messageDiv: 'error'
                })
                
            } else if (errorCode === 'auth/invalid-email') {
                me.setState( {
                    message: 'Invalid E-mail',
                    messageDiv: 'error'
                })
            }

            console.log(error);
        });
    }

    render() {
        return (
            <Fragment>
                <LoginStyles />
                <main>
                    <section>
                        <h2 className="title">Login</h2>

                        <div className="form__login">
                            <label>Nome:</label>
                            <input type="text" name="email" onChange={event => this.handleChange(event)} placeholder="Digite seu e-mail" />

                            <label>Senha:</label>
                            <input type="password" name="pass" onChange={event => this.handleChange(event)} placeholder="Digite sua senha" />

                            <button className="btn-default" onClick={this.authentication.bind(this)}>Acessar</button>
                            <div className={this.state.messageDiv}>
                                <p>{this.state.message}</p>
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment> 
        )
    }
}

export default LoginPage;