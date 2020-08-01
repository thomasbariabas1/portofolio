import {post} from "../API";

const SendEmail = (data) => {
    const url = '/contact/sendEmail'
    return post({url, data})
}

export default SendEmail