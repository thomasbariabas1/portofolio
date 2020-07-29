import {post} from "../API";

const SendEmail = (data) => {
    const url = 'https://theoblogbackend.herokuapp.com/contact/sendEmail'
    return post({url, data})
}

export default SendEmail