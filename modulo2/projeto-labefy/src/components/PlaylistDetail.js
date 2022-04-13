import React from "react"
import styled from "styled-components"
import TrackCard from "./TrackCard"

const PlaylistDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TrackCreationForm = styled.form`
    width: 100vh;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div{
        display: flex;
        flex-direction: column;
    }
`

class PlaylistDetail extends React.Component {
    state = {
        tracks: [
            {
                "id": "ff3f2087-5aeb-4418-87ce-a210dd66506d",
                "name": "Dirty Paws",
                "artist": "Of monsters and men",
                "url": "https://open.spotify.com/track/5g7rJvWYVrloJZwKiShqlS?si=bcda39f399364d02"
            },
            {
                "id": "746c1e8f-9920-4b90-8eb3-aacaaa617e4b",
                "name": "King And Lionheart",
                "artist": "Of monsters and men",
                "url": "https://open.spotify.com/track/310d8Vawp5kYDYrGrrTAzl?si=fdd1f544e90c4875"
            }
        ]
    }

    render() {
        const tracks = this.state.tracks.map((track) => {
            return <TrackCard
                key={track.id}
                trackName={track.name}
                artist={track.artist}
                url={track.url}
            />
        })

        return (<PlaylistDetailContainer>
            <TrackCreationForm>
                <div>
                    <label>Nome da música</label>
                    <input />
                </div>
                <div>
                    <label>Artista</label>
                    <input />
                </div>
                <div>
                    <label>URL da música</label>
                    <input />
                </div>
                <button type="submit" >Adicionar música</button>
            </TrackCreationForm>
            {tracks}
            <button onClick={this.props.goToPlaylists} >Voltar para playlists</button>
        </PlaylistDetailContainer>)
    }
}

export default PlaylistDetail