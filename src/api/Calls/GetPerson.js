import {get} from "../API";
import {getSessionStorageItem} from "../../util/storage";

const GetPerson = () => {
    const url = `/person`

    const token = getSessionStorageItem('token')
    const headers = {
        Authorization: `Bearer ${token}`
    }
    return get({url,headers})
}

export default GetPerson