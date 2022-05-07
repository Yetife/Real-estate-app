import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '6d164931dfmsh2db0ebadf8542dap10aca2jsnd594e9a54d55'
        }
    })
    return data;
}