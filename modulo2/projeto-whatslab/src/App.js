import React from 'react';
import styled from 'styled-components'

const Main = styled.main`
  /* display: grid;
  grid-template-rows: 50px, 1fr, 150px; */
`

const Mensagem = styled.input`
  width: 80%;
  bottom: 0;
`
const Remetente = styled.input`
  width: 20%;
  bottom: 0;
`

const Header = styled.header`
  top: 0%;
`

const Footer = styled.footer`
  bottom: 0;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: right;
`

// const CaixaDestin = styled.p`
//   display: flex;
//   justify-content: left;
// `

class App extends React.Component{
  state={
    pessoas: [
      {
        nomeDestin: 'Desconhecido'
      },
      {
        mensagem: ''
      }
    ],
    valorInputNomeDestin: '',
    valorInputMensagem: ''
  }

  acionarFuncoes = () => {
    this.mudarNome()
    this.enviarMensagem()
  }

  mudarNome = () => {
    const nome = {
      nomeDestin: this.state.valorInputNomeDestin
    }
    const nome2 = [...this.state.pessoas, nome]
    this.setState({pessoas: nome2})
    this.setState({valorInputNomeDestin: ''})
  }

  enviarMensagem = () => {
    const mensagem = {
      msg: this.state.valorInputMensagem
    }
    const mensagem2 = [...this.state.pessoas, mensagem]
    this.setState({pessoas: mensagem2})
    this.setState({valorInputMensagem: ''})
  }

  onChangeInputNomeDestin = (event) => {
    this.setState({valorInputNomeDestin: event.target.value})
  }

  onChangeInputMensagem = (event) => {
    this.setState({valorInputMensagem: event.target.value})
  }

  render() {
    const Conversa = this.state.pessoas.map((pessoa) => {
      return(
        <Header>
          {pessoa.nomeDestin}: {pessoa.mensagem}
        </Header>
      )
    })
    return(
      <Main>
        <div>
          {Conversa}
        </div>
        <div>

        </div>
        <Footer>
          <Remetente
            value={this.state.valorInputNomeDestin}
            onChange={this.onChangeInputNomeDestin}
            placeholder={'Nome do Remetente'}
          />
          <Mensagem
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={'Mensagem'}
          />
          <button onClick={this.acionarFuncoes} >Enviar</button>
        </Footer>
      </Main>
    )
  }
}

export default App;