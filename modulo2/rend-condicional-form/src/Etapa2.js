import React from "react";

export default class Etapa2 extends React.Component {
    state = {
        info: [
            {
                curso: '',
                unidadeDeEnsino: ''
            }
        ],
        valorInputCurso: '',
        valorInputUnidadeDeEnsino: ''
    }

    onChangeInputCurso = (event) => {
        this.setState({valorInputCurso: event.target.value})
    }
    onChangeInputUnidadeDeEnsino = (event) => {
        this.setState({valorInputUnidadeDeEnsino: event.target.value})
    }

    render() {
        return (
            <>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <p>5. Qual curso?</p>
                <input
                    value={this.state.info.curso}
                    onChange={this.onChangeInputCurso}
                />
                <p>6. Qual a unidade de ensino?</p>
                <input
                    value={this.state.info.curso}
                    onChange={this.onChangeInputUnidadeDeEnsino}
                />
            </>
        )
    }
}