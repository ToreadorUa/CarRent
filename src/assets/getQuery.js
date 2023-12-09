import axios from "axios"

axios.defaults.baseURL= 'https://64fcb2a3605a026163aebe9d.mockapi.io/api/v1/'

export const getCars = async () => {
    const data = await axios('adverts/')
    return data;
}