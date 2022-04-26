import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const PostarCaixa = styled.div`
  display: flex;
  justify-content: center;
`

class App extends React.Component {
  state = {
    pessoas: [
      {
        nomeUser: "paulinha",
        fotoUser: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUser: "matheus",
        fotoUser: "https://picsum.photos/10/50",
        fotoPost: "https://picsum.photos/203/150"
      },
      {
        nomeUser: "maria",
        fotoUser: "https://picsum.photos/20/50",
        fotoPost: "https://picsum.photos/201/150"
      }
    ],
    valorInputNomeUser: '',
    valorInputFotoUser: '',
    valorInputFotoPost: ''
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUser: this.state.valorInputNomeUser,
      fotoUser: this.state.valorInputFotoUser,
      fotoPost: this.state.valorInputFotoPost
    }
    const novoPost2 = [...this.state.pessoas, novoPost]
    this.setState({ pessoas: novoPost2 })
    this.setState({ valorInputNomeUser: ''})
    this.setState({ valorInputFotoUser: ''})
    this.setState({ valorInputFotoPost: ''})
  }

  onChangeInputNomeUser = (event) => {
    this.setState({ valorInputNomeUser: event.target.value })
  }

  onChangeInputFotoUser = (event) => {
    this.setState({ valorInputFotoUser: event.target.value })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  render() {
    const Postes = this.state.pessoas.map((pessoa) => {
      return (
        <MainContainer>
          <Post
            nomeUsuario={pessoa.nomeUser}
            fotoUsuario={pessoa.fotoUser}
            fotoPost={pessoa.fotoPost} />
        </MainContainer>
      )
    })
    return (
      <div>
        <div>
          {Postes}
        </div>
        <PostarCaixa>
          <input
            value={this.state.valorInputNomeUser}
            onChange={this.onChangeInputNomeUser}
            placeholder={"Username"}
          />
          <input
            value={this.state.valorInputFotoUser}
            onChange={this.onChangeInputFotoUser}
            placeholder={"Link da foto"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Link da foto do post"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </PostarCaixa>
      </div>
    );
  }
}

export default App;
