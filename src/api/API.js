import axios from 'axios'
import API from './Calls'

const API_HOST = process.env.REACT_APP_API_HOST
export const get = ({url, headers}) => {
    console.log('process.env', process.env)
    return axios.get(API_HOST + url, {headers}).then(response=>response.data)
}

export const post = ({url, data, headers}) => {

    return axios.post(API_HOST + url, data, {headers}).then(response=>response.data)
}

export default API