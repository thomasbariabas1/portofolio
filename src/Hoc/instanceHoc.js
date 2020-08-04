import React, {useEffect} from 'react'
import InstanceProvider, {useInstance} from "../hooks/instance";
import Logo from '../assets/images/logo.svg'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        backgroundColor: '#cbe9f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    '@keyframes slideRight': {
        '100%': {
            transform: 'translate3d(42px, -62px, -135px)'
        }
    },
    logo: {
        animation: '$slideRight 2s linear infinite'
    }

})
export default (Component) => {
    const Child = (props) => {
        const {instance, getInstance} = useInstance()
        const classes = useStyles()
        useEffect(() => {
            getInstance()
        }, [])

        if (!instance) {
            return <div className={classes.container}>
                <img alt={'theoblog'} className={classes.logo} src={Logo}/>
            </div>
        }

        return <Component {...props}/>
    }
    return () => <InstanceProvider>
        <Child/>
    </InstanceProvider>

}