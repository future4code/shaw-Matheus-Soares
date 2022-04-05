import React from "react";
import axios from 'axios'
import styled from "styled-components";

const headers = {
  headers: {
    Authorization: "matheus-moraes-shaw"
  }
}
let temp = false

export default class App extends React.Component {
  state = {
    usuarios: [{
      email: '',
      user: ''
    }
    ],
    inputEmail: '',
    inputUser: ''
  }
  componentDidMount() {
    this.getAllUsers();
  }
  getAllUsers = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    axios
      .get(url, headers)
      .then((res) => {
        console.log(res.data);
        this.setState({usuarios: res.data})
      })
      .catch((err) => {
        alert(err.response.data);
      })
  }
  postUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.inputUser,
      email: this.state.inputEmail
    }
    axios
      .post(url, body, headers)
      .then((res) => {
        axios;
        alert("Usuario criado com sucesso")
        this.getAllUsers();
        this.setState({inputEmail: ''})
        this.setState({inputUser: ''})
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  onChangeInputEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }
  onChangeInputUser = (event) => {
    this.setState({inputUser: event.target.value})
  }

  mudarTela = () => {
    this.setState({temp: !temp})
  }

  render () {
    const imprimeUsers = this.state.usuarios.map((usuario) => {
      return <li key={usuario.id}>{usuario.name}</li>
    })
    const teste = () => {
      if(temp === true ){
        return imprimeUsers
      }
    }
    return (
      <div>
        <button onClick={this.mudarTela}>Mudar Tela</button>
          <ul>{teste}</ul>
        <input
          value={this.state.inputUser}
          onChange={this.onChangeInputUser}
          placeholder={"Nome de usuário"}
        />
        <input
          value={this.state.inputEmail}
          onChange={this.onChangeInputEmail}
          placeholder={"Email do usuário"}
        />
        <button onClick={this.postUser}>Confirmar</button>
      </div>
    )
  }
}