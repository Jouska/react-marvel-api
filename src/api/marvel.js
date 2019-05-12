import axios from 'axios'

const KEY = '67c12712fb6f8cc0453aed7ffeb6257f'

export default axios.create({
    baseURL: 'https://gateway.marvel.com',
    params: {
        apikey: KEY,
        limit: 30,
        offset: 30
    },
})