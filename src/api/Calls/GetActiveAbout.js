import {get} from "../API";

const GetActiveAbout = () => {
    const url = `/about/latest`
    return get({url})
}

export default GetActiveAbout