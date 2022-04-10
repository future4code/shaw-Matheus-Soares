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
const Li = styled.li`
  text-decoration: ${({completa}) => (completa ? "Line-through" : "none")};
`

export default class App extends React.Component {
  state = {
      tarefas: [],
      inputTarefa: '',
      filtro: ''
  }

  componentDidUpdate(){
    const tarefas = this.state.tarefas;
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
  }
  componentDidMount() {
    if(localStorage.getItem("tarefas")){
      const tarefasLS = localStorage.getItem("tarefas")
      const tarefasObjetos = JSON.parse(tarefasLS)
      this.setState({tarefas: tarefasObjetos})
    }
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

  onChangeInputTarefa = (event) => {
    this.setState({ inputTarefa: event.target.value })
  }
  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
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
          <Select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value={''}>Nenhum</option>
            <option value={'pendentes'}>Pendentes</option>
            <option value={'completas'}>Completas</option>
          </Select>
        </p>
      </>
    )
  }

  riscar = (id) => {
    const novaLista = this.state.tarefas.map((tarefa) => {
      if(tarefa.id=== id){
        return {
          ...tarefa,
          completa: !tarefa.completa
        }
      }
      return tarefa;
    })
    this.setState({tarefas: novaLista})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa
        case "completas":
          return tarefa.completa
        default:
          return true
      }
    })
    const ListaDeTarefas = listaFiltrada.map((tarefa) => {
      return (
        <Li completa={tarefa.completa} onClick={()=>this.riscar(tarefa.id)}>
          {tarefa.texto}
        </Li>
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