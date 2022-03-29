import React from "react";
import styled from "styled-components";

const Main = styled.div`
  text-align: center;
`
const Button = styled.button`
  margin-left: 10px;
`
const Select = styled.select`
  margin-left: 10px;
`

export default class App extends React.Component {
  state = {
    tarefa: '',
    inputTarefa: '',
    filtro: ''
  }

  onChangeInputTarefa = (event) => {
    this.setState({ inputTarefa: event.target.value })
  }

  listaDeTarefas = () => {
    return (
      <>
        <h1>Lista de tarefas</h1>
        <input
          value={this.state.inputTarefa}
          onChange={this.onChangeInputTarefa}
        />
        <Button>Adicionar</Button>
        <p>Filtro
          <Select>
            <option>Nenhum</option>
            <option>Pendentes</option>
            <option>Completas</option>
          </Select>
        </p>
      </>
    )
  }

  render() {
    return (
      <Main>
        <div>
          {this.listaDeTarefas()}
        </div>
      </Main>
    )
  }
}