import React, { Component, Fragment } from 'react';

import LoginStyles from './style';

class LoginPage extends Component {
    render() {
        return (
            <Fragment>
                <LoginStyles />
                <main>
                    <section>
                        <h2 className="title">Login</h2>

                        <div className="form__login">
                            <label>Nome:</label>
                            <input type="text" placeholder="Digite seu e-mail" />

                            <label>Senha:</label>
                            <input type="password" placeholder="Digite sua senha" />

                            <button className="btn-default">Acessar</button>
                        </div>
                    </section>
                </main>
            </Fragment> 
        )
    }
}

export default LoginPage;