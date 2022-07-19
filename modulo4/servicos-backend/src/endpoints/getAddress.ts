import axios from 'axios'

type user = {
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

const getAddress = async (CEP: string): Promise<user[]> => {
    const res = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`)
    console.log(res.data.logradouro)
    // return res.data.logradouro, res.data.bairro, res.data.localidade, res.data.uf
    return res.data.logradouro,
        res.data.bairro,
        res.data.localidade,
        res.data.uf
}

export default getAddress