import React from "react"
import Headers from "./styled"
import {goToRecipesList, goToLoginPage} from ""

const Header = () => {
    return (
        <Headers>
            <button onClick={() => goToRecipesList()}>cookenu</button>
            <button onClick={() => goToLoginPage()}>login</button>
        </Headers>
    )
}