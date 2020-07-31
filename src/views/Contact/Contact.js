import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useTranslation} from "../../hooks/translation";
import Paper from "../../components/Paper";
import {Button, makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import all from 'ramda/src/all'
import objectValues from 'ramda/src/values'

import {isEmailValid} from "../../util/validations";
import API from "../../api/API";
import {useMobile} from "../../hooks/mobile";
const useStyles = makeStyles({
    container: {
        padding: '16px',
        display: 'flex',
        flexDirection: 'column'
    },
    fieldContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    fields: {
        margin: '16px'
    }
})

const Contact = props => {
    const {t} = useTranslation()
    const classes = useStyles()
    const [values, setValues] = useState({name: '', surname: '', email: '', phone: '', message: ''})
    const [errors, setErrors] = useState({})

    const handleOnChange = ({target: {name, value}}) => {
        setValues(previousState=>({...previousState, [name]: value}))
    }

    const handleValidations = () => {
        return new Promise((resolve, reject) => {
            const fieldErrors = {}
            // if(values.name === '') {
            //     fieldErrors.name = 'nameCannotBeEmpty'
            // }
            // if(values.surname === '') {
            //     fieldErrors.surname = 'surnameCannotBeEmpty'
            // }
            if(values.email === '') {
                fieldErrors.email = 'emailCannotBeEmpty'
            } else if(!isEmailValid(values.email)) {
                fieldErrors.email = 'emailIsNotValid'
            }
            if(values.message === '') {
                fieldErrors.message = 'messageCannotBeEmpty'
            }

            if(all(error=>!error)(objectValues(fieldErrors))){
                resolve()
            } else {
                reject(fieldErrors)
            }

        })
    }
    const handleSubmit = () => {
        setErrors({})
        handleValidations().then(()=>{
            API.SendEmail(values).then(()=>{
                setValues({name: '', surname: '', email: '', phone: '', message: ''})
            })
        }).catch((errors)=>{
            setErrors(errors)
        })
    }

    const isMobile = useMobile()
    const Element = isMobile ? 'div': Paper
    return <Element elevation={3}>
        <div className={classes.container}>

            <div className={classes.fieldContainer}>
                <TextField className={classes.fields}
                           onChange={handleOnChange}
                           name={'email'}
                           value={values.email}
                           error={!!errors['email']}
                           helperText={errors['email']?t(errors['email']):''}
                           label={'Email'}
                           fullWidth
                           required/>
            </div>
            <TextField variant={'outlined'}
                       onChange={handleOnChange}
                       className={classes.fields}
                       name={'message'}
                       value={values.message}
                       error={!!errors['message']}
                       helperText={errors['message']?t(errors['message']):''}
                       label={t('personalMessage')}
                       multiline
                       required
                       rows={4}/>
            <Button onClick={handleSubmit}>{t('submit')}</Button>
        </div>
    </Element>
};

Contact.propTypes = {

};

export default Contact;