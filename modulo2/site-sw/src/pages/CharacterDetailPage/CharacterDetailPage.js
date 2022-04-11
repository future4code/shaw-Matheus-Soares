import axios from "axios"
import React from "react"
import PlanetDetailPage from "../PlanetasDetailPage/PlanetasDetailPage"

export default class CharacterDetailPage extends React.Component{
    state={
        currentScreen: "",
        character: {},
        planet: "",
        clickedPlanetUrl: ""
    }

    componentDidMount(){
        this.getCharacter()
    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.character !== prevState.character){
            this.getPlanet()
        }
    }

    getCharacter = () => {
        axios
        .get(this.props.url)
        .then((res) => this.setState({character: res.data}))
        .catch((err)=>console.log(err.response))
    }
    getPlanet = () => {
        axios
        .get(this.state.character.homeworld)
        .then((res)=>this.setState({planet: res.data.name}))
        .catch((err)=> console.log(err.response))
    }
    selectScreen = () => {
        switch (this.state.currentScreen){
            case "":
                return(<div>
                    {this.state.character.name && this.state.planet ? (
                        <div>
                            <p>Nome: {this.state.character.name}</p>
                            <p key={this.state.character.homeworld} onClick={()=>this.goToPlanetPage(this.state.character.homeworld)}>Planeta natal: {this.state.planet}</p>
                        </div>
                    ) : <p>Carregando...</p>}
                    <button onClick={this.props.goToListPage}>Voltar</button>
                </div>)
            case "planet":
                return <PlanetDetailPage goToListPage={this.props.goToListPage} url={this.state.clickedPlanetUrl} homeWorld={this.state.character.homeworld}/>
        }
    }
    goToPlanetPage = (url) => {
      this.setState({currentScreen: "planet", clickedPlanetUrl: url})
    }

    render(){
        return (this.selectScreen())
    }
}