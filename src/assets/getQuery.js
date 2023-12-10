import axios from "axios"

axios.defaults.baseURL= 'https://64fcb2a3605a026163aebe9d.mockapi.io/api/v1/'

export const getCar = async (id) => {
    const data = await axios(`adverts/${id}`)
    return data.data;
}