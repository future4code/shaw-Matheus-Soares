import React from "react";

export default class Etapa1 extends React.Component {
    state = {
        info: [
            {
                nome: '',
                idade: 0,
                email: ''
            }
        ],
        valorInputNome: '',
        valorInputIdade: 0
    }

    onChangeInputNome = (event) => {
        this.setState({ valorInputNome: event.target.value })
    }
    onChangeInputIdade = (event) => {
        this.setState({ valorInputIdade: event.target.value })
    }
    onChangeInputEmail = (event) => {
        this.setState({ valorInputEmail: event.target.value })
    }

    render() {
        return (
            <>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <p>1. Qual o seu nome?</p>
                <input
                    value={this.state.info.nome}
                    onChange={this.onChangeInputNome}
                />
                <p>2. Qual sua idade?</p>
                <input
                    value={this.state.info.idade}
                    onChange={this.onChangeInputIdade}
                />
                <p>3. Qual seu email?</p>
                <input
                    value={this.state.info.email}
                    onChange={this.onChangeInputEmail}
                />
            </>
        )
    }
}