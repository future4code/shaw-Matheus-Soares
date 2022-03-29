import React from "react";
import styled from "styled-components";

const Main = styled.div`
  text-align: center;
`

export default class App extends React.Component {
  state = {
    tarefa: '',
    inputTarefa: ''
  }

  onChangeInputTarefa = (event) => {
    this.setState({inputTarefa: event.target.value})
  }

  listaDeTarefas = () => {
    <>
      <h2>Lista de tarefas</h2>
      <input
        value={this.state.inputTarefa}
        onChange={this.onChangeInputTarefa}
      />
    </>
  }

      render(){
    return (
        <Main>
          <div>
            {this.listaDeTarefas()}
          </div>
        </Main>
      )
  }
}