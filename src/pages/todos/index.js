import React, { Component, Fragment } from 'react';

import TodosStyles from './style';

class todosPage extends Component {

    render() {
        return (
            <Fragment>
                <TodosStyles />
                <main>
                    <section>
                        <h2 className="title">Lista de Afazeres</h2>

                        <div className="row">
                            <div className="col-md-4">
                                <label>Nome atividade:</label>
                                <input type="text" name="name" placeholder="Digite a atividade" />
                            </div>
                            <div className="col-md-4">
                                <label>Duração:</label>
                                <input type="text" name="hour" placeholder="Digite a duração" />
                            </div>
                            <div className="col-md-4">
                                <button className="btn-default">Cadastrar</button>
                            </div>
                        </div>
                        <div className="row">
                            <table>
                                <tr>
                                    <th>Nome</th>
                                    <th>Duração</th>
                                    <th>Ação</th>
                                </tr>
                                <tr>
                                    <td>Estudar</td>
                                    <td>2:00</td>
                                    <td><i className="fa fa-pencil"></i><i className="fa fa-trash-o"></i></td>
                                </tr>
                            </table>
                        </div>
                    </section>
                </main>
            </Fragment> 
        )
    }
}

export default todosPage;