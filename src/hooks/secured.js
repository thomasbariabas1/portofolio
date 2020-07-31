import React, {useContext, createContext, useState} from 'react'
import { useHistory } from "react-router-dom";
import API from "../api/API";
import {getSessionStorageItem} from "../util/storage";

const SecureRouteContext = createContext(false);

const SecureRouteProvider = ({children}) => {
    const context = useContext(SecureRouteContext)

    const isAuthenticated = () => {
        return !!getSessionStorageItem('token')
    }

    return <SecureRouteContext.Provider value={isAuthenticated()}>
        {children}
    </SecureRouteContext.Provider>
}

export const useAuthentication = () => {
    return useContext(SecureRouteContext)
}

export  {SecureRouteProvider, SecureRouteContext}