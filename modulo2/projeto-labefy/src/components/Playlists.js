import React from "react"
import styled from "styled-components"
import PlaylistCard from "./PlaylistCard"

const PlaylistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class Playlists extends React.Component {
    state = {
        playlists: 
        [
            {
                "id": "752cfc7d-029e-4da0-9ee3-a9ca032e6df3",
                "name": "Of-monster-and-men"
            },
            {
                "id": "36bd0f7c-48ec-41c4-8ca3-7171e62d2f19",
                "name": "Artic-monkeys"
            },
            {
                "id": "daec143c-3c64-4ede-bbc2-139ef0ab8656",
                "name": "Red-Hot-Chili-Peppers"
            }
        ]
    }

    render() {
        const playlists = this.state.playlists.map((playlist) => {
            return <PlaylistCard
                key={playlist.id}
                onChange={this.props.goToPlaylistDetail}
                name={playlist.name}
            />
        })
        return (<PlaylistsContainer>
            {playlists}
        </PlaylistsContainer>)
    }
}

export default Playlists