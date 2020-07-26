import React, {useState, createContext, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';

const MobileContext = createContext(false)

const Mobile = ({children}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <=480)

    useEffect(()=>{
        window.addEventListener('resize',handleResize)
    }, [])

    const handleResize = () => {
        setIsMobile(window.innerWidth <=480)
    }
    return (
        <MobileContext.Provider value={isMobile}>
            {children}
        </MobileContext.Provider>
    );
};

export const useMobile = () => {
    return useContext(MobileContext)
}

export const MobileConsumer = ({children}) => {
    return <MobileContext.Consumer>{children}</MobileContext.Consumer>
}

Mobile.propTypes = {
    
};

export default Mobile;