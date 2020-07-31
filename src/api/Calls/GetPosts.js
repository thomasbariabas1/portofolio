import {get} from "../API";

const GetPosts = ({page, pageSize}) => {
    const url = `https://theoblogbackend.herokuapp.com/posts?page=${page+1}&pageSize=${pageSize}`
    return get({url})
}

export default GetPosts