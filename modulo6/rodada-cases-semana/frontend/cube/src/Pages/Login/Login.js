import React, { useEffect, useState } from "react";
import { Div, Formu, Buttonstyled, DivPassword, InputMaterial } from './styled'
import { IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const Login = () => {

    const [ email, setEmail]=useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmitLogin = (event) => {
        event.preventDefault()

        console.log(email, password)
    }

    return (
        <Div>
            <p>Entrar</p>
            <Formu onSubmit={onSubmitLogin}>
                <InputMaterial 
                    id="outlined-basic" 
                    label="Email" 
                    type={"email"}
                    variant="outlined" 
                    placeholder={"email@email.com"}
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}
                    required
                />
                <DivPassword>
                <InputMaterial 
                    id="outlined-basic" 
                    label="Password" 
                    type={showPassword ? 'password' : 'text'}
                    variant="outlined" 
                    placeholder={"Minimo 6 caracteres"}
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    inputProps={{minLength:6, title:"A senha deve conter no minimo 6 caracteres"}}
                    required
                />
                <IconButton
                    aria-lable="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff/> : < Visibility />}
                </IconButton>
                </DivPassword>
                <Buttonstyled type='submit' > Entrar </Buttonstyled>
            </Formu>
        </Div>
    )
}

export default Login