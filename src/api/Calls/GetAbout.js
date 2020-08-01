import {get} from "../API";

const GetAbout = () => {
    const url = `/about`
    return get({url})
}

export default GetAbout