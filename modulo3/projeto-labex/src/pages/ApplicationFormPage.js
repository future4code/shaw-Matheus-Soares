import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../consts/Const"
import styled from "styled-components"

const Div = styled.div`
    display: flex;
    flex-direction: column;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`

function ApplicationFormPage () {
    const [tripsList, setTripsList] = useState([])
    const [form, setForm] = useState({
        name: '',
        age: 0,
        applicationText: '',
        profession: '',
        country: '',
        trip: ''
    })
    const [id, setId] = useState('')
    const navigate = useNavigate()

    const onChangeInput = (e) => {
        const newValue = e.target.value
        const fieldName = e.target.name
        console.log("id:", e.target.id);
        setForm({...form, [fieldName]: newValue})
    }

    const voltar = () => {
        navigate(-1)
    }

    useEffect(() => {
        getListTrips()
    }, [])

    const getListTrips = () => {
        axios
            .get(`${BASE_URL}/trips`)
            .then((res) =>{
                console.log(res.data.trips);
                setTripsList(res.data.trips)
            })
            .catch((err) => console.log(err.response))
    }

    const postApplyToTrip = (event) => {
        event.preventDefault()
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        form.trip=event.target.value
        console.log("texto:", id)
        // axios
        //     .post(`${BASE_URL}/trips/${form.trip.id}/apply`, body)
        //     .then((res)=>console.log(res))
        //     .catch((err)=>console.log(err.response))
    }

    const funcao = (e) => {
        console.log("texto2:", e)
        e.preventDefault()
        setId(e.target.value)
    }


    return (
        <Div>
            <Form onSubmit={postApplyToTrip}>
                <select onChange={onChangeInput} value={form['trip']} name={'trip'}>
                    {tripsList.map((trip)=>{
                        return <option value={trip.id} key={trip.id} >{trip.name}</option>
                    })}
                </select>
                <input type='text' placeholder="Nome" onChange={onChangeInput} value={form['name']} name={'name'}/>
                <input type='number' placeholder="Idade" onChange={onChangeInput} value={form['age']} name={'age'}/>
                <input type='text' placeholder="Texto de Candidatura" onChange={onChangeInput} value={form['applicationText']} name={'applicationText'}/>
                <input type='text' placeholder="País" onChange={onChangeInput} value={form['country']} name={'country'}/>
                <input type='text' placeholder="Profissão" onChange={onChangeInput} value={form['profession']} name={'profession'}/>
                <button type='submit'>Enviar</button>
            </Form>
            <button onClick={voltar}>Voltar</button>
        </Div>
    )
}

export default ApplicationFormPage;