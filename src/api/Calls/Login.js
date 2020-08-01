import {post} from "../API";

const Login = (data) => {
    const url = '/auth/login'
    return post({url, data})
}

export default Login