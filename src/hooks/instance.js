import React, {useState, createContext, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import API from "../api/API";

const InstanceContext = createContext(null)

const InstanceProvider = ({children}) => {
    const [instance, setInstance] = useState(null)
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