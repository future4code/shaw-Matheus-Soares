import axios from "axios"
import React from "react"
import styled from "styled-components"
import { BASE_URL, Headers } from "./consts"
import PlaylistCard from "./PlaylistCard"

const PlaylistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class Playlists extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount = () => {
        this.getPlaylists()
    }

    getPlaylists = () => {
        axios
        .get(BASE_URL, Headers)
        .then((res) => this.setState({playlists: res.data.result.list}))
        .catch((err) => console.log(err.response))
    }

    deletePlaylist = (playlistId) => {
        axios
        .delete(`${BASE_URL}/${playlistId}`, Headers)
        .then((res) => this.getPlaylists())
        .catch((err) => console.log(err.response))
    }

    render() {
        const playlists = this.state.playlists.map((playlist) => {
            return <PlaylistCard
                key={playlist.id}
                changePage={this.props.goToPlaylistDetail}
                name={playlist.name}
                playlistId={playlist.id}
                deletePlaylist={this.deletePlaylist}
            />
        })
        return (<PlaylistsContainer>
            {playlists}
        </PlaylistsContainer>)
    }
}

export default Playlists