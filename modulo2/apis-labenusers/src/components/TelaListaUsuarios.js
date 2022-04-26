import React from "react";
import axios from "axios";
import styled from "styled-components"

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

const headers = {
    headers: {
        Authorization: "matheus-moraes-shaw"
    }
}

export default class TelaListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        axios
            .get(url, headers)
            .then((res) => {
                this.setState({ usuarios: res.data })
            })
            .catch((err) => {
                alert(err.response.data.message);
            })
    }
    deleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        if(window.confirm("Tem certeza que quer deletar o usuario?")){
            axios
            .delete(url, headers)
            .then((res) => {
                alert("Usuario deletado com sucesso")
                this.getAllUsers()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
        }
    }

    render() {

        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <button onClick={() => this.deleteUser(user.id)}>x</button>
                </CardUsuario>
            )
        })
        return (
            <>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuarios</h2>
                {listaUsuarios}
            </>
        )
    }
}