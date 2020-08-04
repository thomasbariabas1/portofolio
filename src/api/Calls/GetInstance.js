import {get} from "../API";

const GetInstance = () => {
    const url = `/instance/george.theoxaris`

    return get({url})
}

export default GetInstance