import React from "react"
import styled from "styled-components"

const TrackCardContainer = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        display: flex;
        align-items: center;
    }
`

const TrackContainer = styled.h4`
    margin: 10px;

`

const ArtistContainer = styled.p`
    margin-right: 10px;
`

const DeleteButton = styled.p`
    color: red;
`

export default class TrackCard extends React.Component {
    render() {
        return (<TrackCardContainer>
            <div>
                <TrackContainer>{this.props.trackName}</TrackContainer>
                <ArtistContainer>{this.props.artist}</ArtistContainer>
                <DeleteButton
                    onClick={()=>this.props.deleteTrack(this.props.trackId)}
                >
                    X
                </DeleteButton>
            </div>
            <audio controls="controls">
                <source src={this.props.url} type="audio/ogg" />
            </audio>
        </TrackCardContainer>)
    }
}