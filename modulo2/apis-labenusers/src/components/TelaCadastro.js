import React from "react";
import axios from "axios";

const headers = {
    headers: {
        Authorization: "matheus-moraes-shaw"
    }
}

export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    onChangeInputEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    onChangeInputUser = (event) => {
        this.setState({ nome: event.target.value })
    }

    postUser = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios
            .post(url, body, headers)
            .then((res) => {
                alert("Usuario(a) criado com sucesso")
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    render() {
        return (
            <>
                <button onClick={this.props.irParaLista}>Ir para Lista de Usuarios</button>
                <br/><h2>Cadastrar usuario</h2>
                <input
                    value={this.state.nome}
                    onChange={this.onChangeInputUser}
                    placeholder={"Nome de usuário"}
                />
                <input
                    value={this.state.email}
                    onChange={this.onChangeInputEmail}
                    placeholder={"Email do usuário"}
                />
                <button onClick={this.postUser}>Confirmar</button>
            </>
        )
    }
}