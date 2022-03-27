import React from 'react';
import styled from 'styled-components'

const Main = styled.main`
  display: grid;
  grid-template-rows: 50px, 1vh, 150px;
  grid-template-columns: 1fr, 1fr;
`

const Input = styled.input`
  width: 80%;
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
      }
    ],
    valorInputNomeDestin: ''
  }

  enviaMensagem = () => {
    const nome = {
      nomeDestin: this.state.valorInputNomeDestin
    }
    const nome2 = [...this.state.pessoas, nome]
    this.setState({pessoas: nome2})
    this.setState({valorInputNomeDestin: ''})
  }

  onChangeInputNomeDestin = (event) => {
    this.setState({valorInputNomeDestin: event.target.value})
  }

  render() {
    return(
      <Main>
        <Header>
          
        </Header>
        <div>

        </div>
        <Footer>
          <Input
            value={this.state.valorInputNomeDestin}
            onChange={this.onChangeInputNomeDestin}
            placeholder={'Mensagem'}
          />
          <button onClick={this.enviaMensagem} >Enviar</button>
        </Footer>
      </Main>
    )
  }
}

export default App;