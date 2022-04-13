import React from "react"
import styled from "styled-components"

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

    }

    render() {
        return (<PlaylistCreationFormContainer>
            <h1>Cadastrar nova playlist</h1>
            <PlaylistCreationFormulario>
                <label>Nova playlist</label>
                <input
                    placeholder="Nome da playlist"
                />
                <button type="submit">Cadastrar playlist</button>
            </PlaylistCreationFormulario>
        </PlaylistCreationFormContainer>)
    }
}

export default PlaylistCreationForm