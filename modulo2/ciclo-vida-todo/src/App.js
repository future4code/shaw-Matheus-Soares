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
const Botao = styled.button`
  border-style: none;
  background-color: white;
`

export default class App extends React.Component {
  state = {
      tarefas: [],
      inputTarefa: '',
      filtro: ''
  }

  adicionaTarefa = () => {
    const tarefa = {
      id: Date.now(),
      texto: this.state.inputTarefa,
      completa: false
    }
    const tarefa2 = [...this.state.tarefas, tarefa]
    this.setState({ tarefas: tarefa2 })
    this.setState({ inputTarefa: '' })
  }

  riscar = () => {
    return (
      this.setState({completa: true })
    )
  }

  onChangeInputTarefa = (event) => {
    this.setState({ inputTarefa: event.target.value })
  }

  funcaoPrincipal = () => {
    return (
      <>
        <h1>Lista de tarefas</h1>
        <input
          value={this.state.inputTarefa}
          onChange={this.onChangeInputTarefa}
        />
        <Button onClick={this.adicionaTarefa}>Adicionar</Button>
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

  renderizar = (id, tarefa) => {
    if (id===tarefa.id){
      console.log('entrou no if');
      return <Botao onClick={this.riscar}>{tarefa.inputTarefa}</Botao>
    }
    return <Botao onClick={this.riscar}><s>{tarefa.inputTarefa}</s></Botao>
  }

  render() {
    const ListaDeTarefas = this.state.tarefas.map((tarefa) => {
      return (
        <li>
          <Botao onClick={this.renderizar(tarefa.id, tarefa)}>{tarefa.texto}</Botao>.
        </li>
      )
    })
    return (
      <Main>
        <div>
          {this.funcaoPrincipal()}
        </div>
        <div>
          {ListaDeTarefas}
        </div>
      </Main>
    )
  }
}