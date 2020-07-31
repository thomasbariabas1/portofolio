import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Paper from "../../components/Paper";
import TextField from "@material-ui/core/TextField";
import {useTranslation} from "../../hooks/translation";
import {makeStyles} from "@material-ui/core/styles";
import Button from "../../components/buttons/Button";
import {useMobile} from "../../hooks/mobile";
import API from "../../api/Calls";
import {setSessionStorageItem} from "../../util/storage";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    loginContainer: {
        position: 'relative',
        width: '300px',
        height:'200px',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        justifyContent: 'space-between',
        '@media (max-width: 480px)':{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            padding: '0 24px'
        }
    },
    loginFieldsContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    loginField: {
        margin: '4px 0'
    },
    loginButton: {
        border: '1px solid purple',
        color: 'purple',
        '@media (max-width: 480px)':{
            marginTop: '32px'
        }
    }
})
const Login = props => {
    const [values, setValues] = useState({username: '', password: ''})
    const {t} = useTranslation()
    const classes = useStyles()
    const isMobile = useMobile()
    const history = useHistory()

    const ContainerComponent = isMobile? 'div': Paper

    const onChange = ({target: {name, value}}) => {
        setValues(prevState => ({...prevState, [name]: value}))
    }
    const onLogin = () => {
        API.Login(values).then((response)=>{
            console.log('response',response)
            setSessionStorageItem('token', response.token)
            history.replace('/admin')
        })
    }

    return (
        <ContainerComponent className={classes.loginContainer} elevation={3}>
                    <div className={classes.loginFieldsContainer}>
                    <TextField className={classes.loginField}
                               name={'username'}
                               label={t('username')}
                               value={values.username}
                               onChange={onChange}/>
                    <TextField className={classes.loginField}
                               name={'password'}
                               value={values.password}
                               label={t('password')}
                               onChange={onChange}/>
                    </div>
                    <Button className={classes.loginButton} variant={'text'} onClick={onLogin}>LOGIN</Button>
        </ContainerComponent>
    );
};

Login.propTypes = {
    
};

export default Login;