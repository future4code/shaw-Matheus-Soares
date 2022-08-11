import React from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { CharacterCard } from "./styled"

export default class CharacterListPage extends React.Component {
    state = {
        characterList: []
    }

    componentDidMount() {
        this.getCharacterList()
    }

    getCharacterList = () => {
        axios
            .get(`${BASE_URL}/people`)
            .then((res) => this.setState({ characterList: res.data.results }))
            .catch((err) => console.log(err.response))
    }

    render() {
        const characters = this.state.characterList.map((person) => {
            return <CharacterCard
                key={person.url}
                onClick={()=>this.props.goToDetailPage(person.url)}
            >
                {person.name}
            </CharacterCard>
        })
        return (<div>
            {characters}
        </div>)
    }
}