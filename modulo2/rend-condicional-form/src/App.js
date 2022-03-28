import React from 'react'
import styled from 'styled-components'
import Etapa1 from './Etapa1'
import Etapa2 from './Etapa2'
import Etapa3 from './Etapa3'

const Main = styled.div`
  text-align: center;
`

class App extends React.Component {
  state = {
    etapa: 0
  }


  funcaoMain = () => {
    switch (this.state.etapa) {
      case 0:
        return <Etapa1/>
       case 1:
         return <Etapa2/>
      case 2:
        return <Etapa3/>;
      // case 3:
      //   return final;
    }
  }

  proximaEtapa = () => {
    this.setState({etapa: this.state.etapa+1})
  }

  render() {
    return (
      <Main>
        {this.funcaoMain()}<br/>
        <button onClick={this.proximaEtapa}>Próxima etapa</button>
      </Main>
    )
  }
}

export default App;