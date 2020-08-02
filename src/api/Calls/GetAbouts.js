import {get} from "../API";

const GetAbouts = ({page, pageSize}) => {
    const url = `/about?page=${page+1}&pageSize=${pageSize}`
    return get({url})
}

export default GetAbouts