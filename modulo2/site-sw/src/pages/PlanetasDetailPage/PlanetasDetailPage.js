import React from "react";
import axios from "axios"

export default class PlanetDetailPage extends React.Component{
    state = {
        planeta: {}
    }

    componentDidMount(){
        this.getPlanet()
    }

    getPlanet=()=>{
        axios
        .get(this.props.homeWorld)
        .then((res)=>this.setState({planeta: res.data}))
        .catch((err)=>console.log(err.response))
    }

    render(){
        return (<div>
            <p>Clima: {this.state.planeta.climate}</p>
            <p>Data de criação: {this.state.planeta.created}</p>
            <p>Diâmetro: {this.state.planeta.diameter}</p>
            <p>Gravidade: {this.state.planeta.gravity}</p>
            <p>População: {this.state.planeta.population}</p>
            <button onClick={this.props.goToListPage}>Voltar pra lista</button>
        </div>)
    }
}