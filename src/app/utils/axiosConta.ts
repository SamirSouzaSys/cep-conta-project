const axios = require('axios').default

const urlConta = 'http://localhost:3004/conta'

export const getConta = async (getConta?: string) => {
    try {
        const response = await axios.get(urlConta)
        return response
    } catch (error) {
        console.log(error)
        return false
    }
}

export const deleteConta = async (idConta: number) => {
    try {
        const response = await axios.delete(urlConta+`/${idConta}`)
        return response
    } catch (error) {
        return error
    }
}