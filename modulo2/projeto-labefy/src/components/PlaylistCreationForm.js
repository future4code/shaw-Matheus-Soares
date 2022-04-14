import React from "react"
import styled from "styled-components"
import axios from "axios"
import { BASE_URL, Headers } from "./consts"

const PlaylistCreationFormContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PlaylistCreationFormulario = styled.form`
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

class PlaylistCreationForm extends React.Component {
    state = {
        inputNameValue: ""
    }

    onChangeInputNameValue = (event) => {
        this.setState({inputNameValue: event.target.value})
    }

    createPlaylist = (e) => {
        e.preventDefault()
        const body = {
            name: this.state.inputNameValue
        }

        axios
        .post(BASE_URL, body, Headers)
        .then(() => alert("Playlist criada"))
        .catch((err) => console.log(err.response))
        this.setState({inputNameValue: ""})
    }

    render() {
        return (<PlaylistCreationFormContainer>
            <h1>Cadastrar nova playlist</h1>
            <PlaylistCreationFormulario onSubmit={this.createPlaylist}>
                <label>Nova playlist</label>
                <input
                    placeholder="Nome da playlist"
                    type="text"
                    value={this.state.inputNameValue}
                    onChange={this.onChangeInputNameValue}
                />
                <button type="submit">Cadastrar playlist</button>
            </PlaylistCreationFormulario>
        </PlaylistCreationFormContainer>)
    }
}

export default PlaylistCreationForm