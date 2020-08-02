import {post} from "../API";
import {getSessionStorageItem} from "../../util/storage";

const SavePerson = (data) => {
    const url = '/person/save'
    const token = getSessionStorageItem('token')
    const headers = {
        Authorization: `Bearer ${token}`
    }
    return post({url, data, headers})
}

export default SavePerson