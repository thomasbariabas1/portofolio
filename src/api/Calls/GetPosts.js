import {get} from "../API";

const GetPosts = ({page, pageSize}) => {
    const url = `/posts?page=${page+1}&pageSize=${pageSize}`
    return get({url})
}

export default GetPosts