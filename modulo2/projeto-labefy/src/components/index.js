import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom-style: solid;
`

const ButtonsContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-around;

`

const Header = (props) => {
    return (<HeaderContainer>
        <h1>Labefy</h1>
        <ButtonsContainer>
            <button onClick={props.goToPlaylistCreationForm}>Cadastras Playlist</button>
            <button onClick={props.goToPlaylistManagerPage}>Gerenciar Playlist</button>
        </ButtonsContainer>
    </HeaderContainer>)
}

export default Header