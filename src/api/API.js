import axios from 'axios'
import API from './Calls'

export const get = ({url, headers}) => {
    return axios.get(url, {headers}).then(response=>response.data)
}

export const post = ({url, data, headers}) => {
    return axios.post(url, data, {headers}).then(response=>response.data)
}

export default API