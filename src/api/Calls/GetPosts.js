import {get} from "../API";

const GetPosts = () => {
    const url = 'https://theoblogbackend.herokuapp.com/posts'
    return get({url})
}

export default GetPosts