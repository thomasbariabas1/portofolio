import {post} from "../API";
import {getSessionStorageItem} from "../../util/storage";

const SavePost = (data) => {
    const url = 'https://theoblogbackend.herokuapp.com/posts/save'
    const token = getSessionStorageItem('token')
    const headers = {
        Authorization: `Bearer ${token}`
    }
    return post({url, data, headers})
}

export default SavePost