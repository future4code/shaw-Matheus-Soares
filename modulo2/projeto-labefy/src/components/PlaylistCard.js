import React from "react"
import styled from "styled-components"

const PlaylistCardContainer = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
`
const NameContainer = styled.p`
    margin: 10px;

`

const DeleteButton = styled.p`
    color: red;
`

export default class PlaylistCard extends React.Component{
    render(){
        return (<PlaylistCardContainer>
            <button onClick={this.props.onChange}>Abrir Playlist</button>
            <NameContainer>{this.props.name}</NameContainer>
            <DeleteButton>X</DeleteButton>
        </PlaylistCardContainer>)
    }
}