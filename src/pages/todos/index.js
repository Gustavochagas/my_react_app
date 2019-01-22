import React, { Component, Fragment } from 'react';
import firebase from '../../firebase';

import TodoList from "./table";

import TodosStyles from './style';

class todosPage extends Component {
    state = {
        form: {
            name: "",
            hour: ""
        },
        todos: [],
        errorMessage: ""
    };

    onChangeName = event => {
        const { value } = event.target;
        this.setState({
            form: {
                ...this.state.form,
                name: value
            }
        });
    };

    onChangeHour = event => {
        const { value } = event.target;
        this.setState({
            form: {
                ...this.state.form,
                hour: value
            }
        });
    };

    onSubmit = async event => {
        event.preventDefault(); // previne que o browser atualize a página
        // armazenamos um objeto com os dados do state + a data atual
        if(this.state.form.name.length > 0) {
            this.setState({
                errorMessage: ''
            });

            const comment = {
              ...this.state.form,
              createdAt: new Date().getTime()
            };
            // mandamos o firebase armazenar no banco "banco", o registro atual
            await firebase
              .database()
              .ref("banco")
              .push(comment);
            // após o registro ser adicionado, vamos limpar o formulário
            this.setState({
                form: {
                    name: "",
                    hour: ""
                }
            });
        } else {
            this.setState({
                errorMessage: 'messageError'
            })
        }
    };

    onRemove = uid => {
        const todoRef = firebase
          .database()
          .ref("banco")
          .child(uid);
        todoRef.remove();
    };

    onEdit = uid => {

        // const todoRef = firebase.database().ref(`banco/${uid}`);
        // todoRef.update({
        //   name: "Nome editado",
        //   hour: "Comentário editado"
        // });
      };

    componentDidMount() {
        firebase
          .database()
          .ref("banco")
          .on("value", snapshot => {
            const response = snapshot.val();
            const todos = !!response
              ? Object.keys(response).map(uid => ({
                  ...response[uid],
                  uid
                }))
              : [];
            this.setState({
              todos
            });
          });
      }

    render() {
        const { todos } = this.state;
        return (
            <Fragment>
                <TodosStyles />
                <main>
                    <section>
                        <h2 className="title">Lista de Afazeres</h2>

                        <div className="row">
                            <div className="col-md-4">
                                <label>Nome atividade:</label>
                                <input className={this.state.errorMessage} type="text" name="name" value={this.state.form.name} onChange={this.onChangeName} placeholder="Digite a atividade" />
                            </div>
                            <div className="col-md-4">
                                <label>Duração:</label>
                                <input className={this.state.errorMessage} type="text" name="hour" value={this.state.form.hour} onChange={this.onChangeHour} placeholder="Digite a duração" />
                            </div>
                            <div className="col-md-4">
                                <button className="btn-default" onClick={this.onSubmit}>Cadastrar</button>
                            </div>
                        </div>
                        <TodoList todos={todos} onRemove={this.onRemove} onEdit={this.onEdit}/>
                    </section>
                </main>
            </Fragment> 
        )
    }
}

export default todosPage;