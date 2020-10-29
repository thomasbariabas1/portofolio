import React, {useState, createContext, useContext} from 'react';
import PropTypes from 'prop-types';
import {useGraphql} from "./graphql";
import API from "../api/Calls";

const InstanceContext = createContext(null)

const InstanceProvider = ({children}) => {
    const [instance, setInstance] = useState(null)
    const {getInstanceGQ} = useGraphql()

    const getInstance = () => {
            return API.GetInstance().then(instance=>{
                setInstance(instance)
            })
    }

    return (
        <InstanceContext.Provider value={{instance, getInstance}}>
            {children}
        </InstanceContext.Provider>
    );
};

export const useInstance = () => {
    return useContext(InstanceContext)
}

export default InstanceProvider;