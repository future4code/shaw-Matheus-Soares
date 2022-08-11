import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../consts/Const"

function ListTripsPage() {
    const [tripsList, setTripsList] = useState([])
    const navigate = useNavigate()

    const navegar = (param) => {
        navigate(param)
    }

    useEffect(() => {
        getListTrips()
    }, [])

    const getListTrips = () => {
        axios
            .get(`${BASE_URL}/trips`)
            .then((res) => setTripsList(res.data.trips))
            .catch((err) => console.log(err.response))
    }

    return (
        <div>
            <button onClick={() => navegar(-1)} >Voltar</button>
            <button onClick={() => navegar("/trips/application")} >Inscrever-se</button>
            {tripsList.map((trip) => {
                return (
                    <div>
                        <p>Nome:{trip.name}</p>
                        <p>descricao: {trip.description}</p>
                        <p>duracao: {trip.durationInDays} dias</p>
                        <p>planeta: {trip.planet}</p>
                        <br/><br/>
                    </div>
                )
            })}
        </div>
    )
}

export default ListTripsPage;