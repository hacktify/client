import axios from 'axios'

const ax = axios.create({
    baseURL: 'http://35.247.171.62',
    headers: {
        'token': localStorage.getItem('access_token')
    }
})

export default ax