import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { BASE_URL } from './Consts';
import styled from "styled-components"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Img = styled.img`
  width: 20%;
  height: 20%;
`
const Botoes = styled.div`
  display: flex;
  justify-content: space-between;
`
const Match = styled.button`
  width: 50px;
  height: 50px;
`
const Passar = styled.button`
  width: 50px;
  height: 50px;
`


function App() {
  const [perfis, setPerfis] = useState({})
  const [matches, setMatches] = useState([])
  const [imprimir, setImprimir] = useState(false)

  useEffect (() => {
    getProfileToChose()
  }, [])

  const getProfileToChose = () => {
    axios
    .get(`${BASE_URL}person`)
    .then((res) => setPerfis(res.data.profile))
    .catch((res) => console.log(res.response))
  }

  const postChoosePerson = (id, boolean) => {
    const body={id: id,choice: boolean}
    axios
    .post(`${BASE_URL}choose-person`,body)
    .then((res) => getProfileToChose())
    .catch((res)=>console.log(res.response))
  }

  const imprimirMatches = () => {
    getMatches()
    console.log(matches)
    setImprimir(!imprimir)
  }

  const getMatches = () => {
    axios
    .get(`${BASE_URL}matches`)
    .then((res) => setMatches(res.data.matches))
    .catch((res) => console.log(res.response))
  }

  return (
    <Card>
      {console.log(perfis)} {console.log(matches)}
      <Img src={perfis.photo} />
      <p>{perfis.name}, {perfis.age}</p>
      <p>{perfis.bio}</p>
      <Botoes>
        <Match onClick={() => postChoosePerson(perfis.id, true)} >S2</Match>
        <Passar onClick={() => postChoosePerson(perfis.id, false)} >X</Passar>
      </Botoes>
      <button onClick={() => imprimirMatches()}>Ver matches</button>
      {imprimir && matches.map((match) => 
        <p>{match.name}</p>
      )}
    </Card>
  );
}

export default App;
