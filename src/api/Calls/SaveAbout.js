import {post} from "../API";
import {getSessionStorageItem} from "../../util/storage";

const SaveAbout = (data) => {
    const url = '/about/save'
    const token = getSessionStorageItem('token')
    const headers = {
        Authorization: `Bearer ${token}`
    }
    return post({url, data, headers})
}

export default SaveAbout