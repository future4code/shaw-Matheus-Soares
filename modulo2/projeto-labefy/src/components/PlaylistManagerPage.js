import React from "react"
import styled from "styled-components"
import PlaylistDetail from "./PlaylistDetail"
import Playlists from "./Playlists"

const PlaylistManagerPageContainer = styled.div`
    
`

class PlaylistManagerPage extends React.Component {
    state = {
        currentPage: "playlists",
        playlistId: ""
    }

    goToPlaylists = () => {
        this.setState({ currentPage: "playlists" })
    }
    goToPlaylistDetail = (playlistId) => {
        this.setState({ currentPage: "details", playlistId: playlistId })
    }

    renderCurrentPage = () => {
        switch (this.state.currentPage) {
            case "playlists":
                return <Playlists goToPlaylistDetail={this.goToPlaylistDetail} />
            case "details":
                return <PlaylistDetail goToPlaylists={this.goToPlaylists} playlistId={this.state.playlistId} />
        }
    }

    render() {
        return (<PlaylistManagerPageContainer>
            {this.renderCurrentPage()}
        </PlaylistManagerPageContainer>)
    }
}

export default PlaylistManagerPage