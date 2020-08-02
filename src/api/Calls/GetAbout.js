import {get} from "../API";

const GetAbout = (aboutId) => {
    const url = `/about/${aboutId}`
    return get({url})
}

export default GetAbout