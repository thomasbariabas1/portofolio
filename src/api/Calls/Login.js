import {post} from "../API";

const Login = (data) => {
    const url = 'https://theoblogbackend.herokuapp.com/auth/login'
    return post({url, data})
}

export default Login