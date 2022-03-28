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
    pessoas: [],
    valorInputNomeDestin: '',
    valorInputMensagem: ''
  }

  mudarNome = () => {
    const conteudo = {
      valorInputNomeDestin: this.state.valorInputNomeDestin,
      valorInputMensagem: this.state.valorInputMensagem
    }
    const pessoasAtt = [...this.state.pessoas, conteudo]
    this.setState({pessoas: pessoasAtt})
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
          {pessoa.valorInputNomeDestin}: {pessoa.valorInputMensagem}
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
          <button onClick={this.mudarNome} >Enviar</button>
        </Footer>
      </Main>
    )
  }
}

export default App;