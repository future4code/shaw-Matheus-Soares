import React from "react";
import axios from 'axios'
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuarios from "./components/TelaListaUsuarios";
import styled from "styled-components";

const headers = {
  headers: {
    Authorization: "matheus-moraes-shaw"
  }
}

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }
  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>ERRO! Página não encontrada :(</div>
    }
  }
  render () {
    // const imprimeUsers = this.state.usuarios.map((usuario) => {
    //   return <><li key={usuario.id}>{usuario.name}</li><button onClick={()=>this.deleteUser(usuario.id)}>x</button></>
    // })


    return (
      <div>
        {this.escolheTela()}
        {/* <div>
          {this.escolheTela()}
        </div>
        <button onClick={this.mudarTela}>Mudar Tela</button>
          <ul>{teste}</ul>
         */}
      </div>
    )
  }
}