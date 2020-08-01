import {get} from "../API";

const GetPost = (postId) => {
    const url = `/posts/${postId}`
    return get({url})
}

export default GetPost