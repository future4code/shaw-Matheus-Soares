import axios from "axios"
import React from "react"
import styled from "styled-components"
import { BASE_URL, Headers } from "./consts"
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
        tracks: [],
        trackName: "",
        artist: "",
        url: ""
    }

    componentDidMount = () => {
        this.getTracks()
    }

    getTracks = () => {
        axios
        .get(`${BASE_URL}/${this.props.playlistId}/tracks`, Headers)
        .then((res) => this.setState({tracks: res.data.result.tracks}))
        .catch((err) => console.log(err.response))
    }
    deleteTrack = (trackId) => {
        axios
        .delete(`${BASE_URL}/${this.props.playlistId}/tracks/${trackId}`, Headers)
        .then(() => this.getTracks())
        .catch((err) => console.log(err.response))
    }

    onChangeInputValue = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    addTrack = (e) => {
        e.preventDefault()
        const body ={
            name: this.state.trackName,
            artist: this.state.artist,
            url: this.state.url
        }

        axios
        .post(`${BASE_URL}/${this.props.playlistId}/tracks`, body, Headers)
        .then(() => {this.getTracks();this.setState({trackName:"",artist:"",url:""})})
        .catch((err) => console.log(err.response))
    }

    render() {
        const tracks = this.state.tracks.map((track) => {
            return <TrackCard
                key={track.id}
                trackName={track.name}
                artist={track.artist}
                url={track.url}
                trackId={track.id}
                deleteTrack={this.deleteTrack}
            />
        })

        return (<PlaylistDetailContainer>
            <TrackCreationForm onSubmit={this.addTrack}>
                <div>
                    <label>Nome da música</label>
                    <input
                        placeholder="nome da música"
                        name="trackName"
                        value={this.state.trackName}
                        onChange={this.onChangeInputValue}
                    />
                </div>
                <div>
                    <label>Artista</label>
                    <input
                        placeholder="nome do artista"
                        name="artist"
                        value={this.state.artist}
                        onChange={this.onChangeInputValue}
                    />
                </div>
                <div>
                    <label>URL da música</label>
                    <input
                        placeholder="url da música"
                        name="url"
                        value={this.state.url}
                        onChange={this.onChangeInputValue}
                    />
                </div>
                <button type="submit" >Adicionar música</button>
            </TrackCreationForm>
            {tracks}
            <button onClick={() => this.props.goToPlaylists("")} >Voltar para playlists</button>
        </PlaylistDetailContainer>)
    }
}

export default PlaylistDetail