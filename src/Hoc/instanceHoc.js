import React, {useEffect} from 'react'
import InstanceProvider, {useInstance} from "../hooks/instance";
import Logo from '../assets/images/logo.svg'
import {makeStyles} from "@material-ui/core/styles";
import GraphqlProvider from "../hooks/graphql";

const useStyles = makeStyles({
    container: {
        backgroundColor: '#cbe9f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    '@keyframes slideRight': {
        '25%': {
            transform: 'translate3d(42px, -62px, -135px)'
        },
        '50%': {
            transform: 'translate3d(0px, 0px, 0px)'
        },
        '75%': {
            transform: 'translate3d(42px, 62px, 135px)'
        },
        '100%': {
            transform: 'translate3d(0px, 0px, 0px)'
        }
    },
    logo: {
        animation: '$slideRight 4s linear infinite'
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
    return () => <GraphqlProvider>
        <InstanceProvider>
        <Child/>
    </InstanceProvider>
    </GraphqlProvider>

}