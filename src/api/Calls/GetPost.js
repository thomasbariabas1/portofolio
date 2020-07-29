import {get} from "../API";

const GetPost = (postId) => {
    const url = `https://theoblogbackend.herokuapp.com/posts/${postId}`
    return get({url})
}

export default GetPost