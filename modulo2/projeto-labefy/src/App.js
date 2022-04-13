import React from "react"
import styled from "styled-components"
import Header from "./components/index"
import PlaylistCreationForm from "./components/PlaylistCreationForm"
import PlaylistManagerPage from "./components/PlaylistManagerPage"

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

class App extends React.Component{
  state = {
    currentPage: "playlistCreationForm"
  }

  goToPlaylistCreationForm = () => {
    this.setState({currentPage: "playlistCreationForm"})
  }
  goToPlaylistManagerPage = () => {
    this.setState({currentPage: "playlistManagerPage"})
  }

  renderCurrentPage = () => {
    switch (this.state.currentPage){
      case "playlistCreationForm":
        return <PlaylistCreationForm/>
      case "playlistManagerPage":
        return <PlaylistManagerPage/>
      default:
        return <PlaylistCreationForm/>
    }
  }

  render(){
    return (
      <AppContainer>
        <Header
          goToPlaylistCreationForm={this.goToPlaylistCreationForm}
          goToPlaylistManagerPage={this.goToPlaylistManagerPage}
        />
        {this.renderCurrentPage()}
      </AppContainer>
    );
  }
}

export default App;
