import axios from 'axios'

const ax = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'token': localStorage.getItem('access_token')
    }
})

export default ax