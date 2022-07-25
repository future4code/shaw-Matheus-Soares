import React from 'react'
import { Div, Formu, Buttonstyled } from './styled'
import { TextField } from '@mui/material'

const Login = () => {
    return (
        <Div>
            <p>Entrar</p>
            <Formu>
                <TextField 
                    id="outlined-basic" 
                    label="Outlined" 
                    variant="outlined" 
                />
                <TextField 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                />
                <Buttonstyled type='submit' > Entrar </Buttonstyled>
            </Formu>
        </Div>
    )
}

export default Login