import React from "react"
import styled from "styled-components"
import PlaylistDetail from "./PlaylistDetail"
import Playlists from "./Playlists"

const PlaylistManagerPageContainer = styled.div`
    
`

class PlaylistManagerPage extends React.Component {
    state = {
        currentPage: "playlists"
    }

    goToPlaylists = () => {
        this.setState({currentPage: "playlists"})
    }
    goToPlaylistDetail = () => {
        this.setState({currentPage: "details"})
    }

    renderCurrentPage = () => {
        switch (this.state.currentPage){
            case "playlists":
                return <Playlists goToPlaylistDetail={this.goToPlaylistDetail}/>
            case "details":
                return <PlaylistDetail goToPlaylists={this.goToPlaylists} />
        }
    }

    render() {
        return (<PlaylistManagerPageContainer>
            {this.renderCurrentPage()}
        </PlaylistManagerPageContainer>)
    }
}

export default PlaylistManagerPage