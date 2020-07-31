import React from 'react'
import {useAuthentication} from "../hooks/secured";
import {useHistory} from "react-router-dom";

export const authenticationHoc = (Component) => {
    return (props)=> {
        const isAuthenticated = useAuthentication()
        const history = useHistory()
        if(isAuthenticated) {
            return <Component {...props}/>
        } else {
            history.replace('/login')
            return null
        }
    }
}