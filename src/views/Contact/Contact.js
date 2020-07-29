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
        margin: '40px'
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
            if(values.name === '') {
                fieldErrors.name = 'nameCannotBeEmpty'
            }
            if(values.surname === '') {
                fieldErrors.surname = 'surnameCannotBeEmpty'
            }
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

    return <Paper elevation={3}>
        <div className={classes.container}>
            <div className={classes.fieldContainer}>
                <TextField className={classes.fields}
                           name={'name'}
                           label={t('name')}
                           error={!!errors['name']}
                           value={values.name}
                           helperText={errors['name']?t(errors['name']):''}
                           onChange={handleOnChange}
                           fullWidth
                           required/>
                <TextField className={classes.fields}
                           name={'surname'}
                           value={values.surname}
                           error={!!errors['surname']}
                           helperText={errors['surname']?t(errors['surname']):''}
                           onChange={handleOnChange}
                           label={t('surname')}
                           fullWidth
                           required/>
            </div>
            <div className={classes.fieldContainer}>
                <TextField className={classes.fields}
                           onChange={handleOnChange}
                           name={'email'}
                           value={values.email}
                           error={!!errors['email']}
                           helperText={errors['email']?t(errors['email']):''}
                           label={t('email')}
                           fullWidth
                           required/>
                <TextField className={classes.fields}
                           onChange={handleOnChange}
                           name={'phone'}
                           value={values.phone}
                           error={!!errors['phone']}
                           helperText={errors['phone']?t(errors['phone']):''}
                           label={t('phone')}/>
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
    </Paper>
};

Contact.propTypes = {

};

export default Contact;