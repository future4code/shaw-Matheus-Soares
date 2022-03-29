import React from "react";

export default class Etapa3 extends React.Component {
    state = {
        info: [ 
            {
                porque: ''
            }
        ],
        valorInputPorque: ''
    }

    onChangeInputPorque = (event) => {
        this.setState({valorInputPorque: event.target.value})
    }

    render() {
        return (
            <>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <p>7. Por que você não terminou um curso de graduação:</p>
                <input
                    value={this.state.info.porque}
                    onChange={this.onChangeInputPorque}
                />
                <p>8. Você fez algum curso complementar?</p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                </select>
            </>
        )
    }
}