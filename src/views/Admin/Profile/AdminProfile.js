import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Paper from "../../../components/Paper";
import {useTranslation} from "../../../hooks/translation";
import {makeStyles} from "@material-ui/core/styles";
import {Divider} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {usePerson} from "../../../hooks/person";
import Button from "../../../components/buttons/Button";

const useStyles = makeStyles({
    container: {
        padding: '16px'
    },
    fieldsContainerColumn: {
        margin: '8px',
        display: 'flex',
        flexDirection: 'column'
    },
    fieldsContainerRow: {
        display: 'flex',
        flexDirection: 'row',
        '@media (max-width: 480px)': {
            flexDirection: 'column'
        }
    },
    field: {
        margin: '4px'
    }
})
const AdminProfile = props => {
    const {t} = useTranslation()
    const classes = useStyles()
    const {person, getPerson, savePerson} = usePerson()
    const [values, setValues] = useState({firstName: '', lastName: '', profileImg: '', profileImgData: '', facebook: '', twitter: '', medium:'', github: ''})
    useEffect(()=>{
        getPerson().then(person=>{
            setValues(prevState => ({...prevState,...person, profileImg:'', profileImgData:person.profileImg}))
        })
    }, [])

    if(!person) {
        return null
    }
    const onChangeProfileImg = ({target: {name, value, files}}) =>{
        if(files && files[0]) {
            const reader = new FileReader()
            reader.addEventListener('load', (event) => {
                const result = event.target.result;
                setValues(prevState => ({...prevState, profileImg: value, profileImgData: result}))
            });
            reader.readAsDataURL(files[0]);

        }
    }

    const onChange = ({target:{name,value}}) => {
        setValues(prevState => ({...prevState, [name]:value}))
    }

    const onSave = () => {
        const request = {
            ...person,
            ...values,
            profileImg: values.profileImgData
        }
        savePerson(request)
    }

    return (
        <Paper elevation={3} className={classes.container}>
            <h2>{t('personalDetails')}</h2>
            <div className={classes.fieldsContainerColumn}>
                <div className={classes.fieldsContainerRow}>
                    <TextField className={classes.field}
                               label={t('name')}
                               name={'firstName'}
                               value={values.firstName }
                               onChange={onChange}
                               fullWidth/>
                    <TextField className={classes.field}
                               label={t('surname')}
                               name={'lastName'}
                               onChange={onChange}

                               value={ values.lastName}
                               fullWidth/>
                </div>
                <TextField type={'file'}
                           name={'coverImg'}
                           inputProps={{
                               accept:"image/jpeg,image/png"
                           }}
                           value={values.profileImg}
                           className={classes.field}
                           onChange={onChangeProfileImg}
                           label={t('coverImg')}
                           fullWidth/>

            </div>
            <img src={"data:image/jpeg;base64," +values.profileImgData} />
            <Divider/>
            <h2>{t('socialLinks')}</h2>
            <div className={classes.fieldsContainerColumn}>
                <div className={classes.fieldsContainerRow}>
                    <TextField className={classes.field}
                               label={t('Facebook')}
                               name={'facebook'}
                               value={values.facebook}
                               onChange={onChange}
                               fullWidth/>
                    <TextField className={classes.field}
                               label={t('Twitter')}
                               name={'twitter'}
                               value={values.twitter}
                               onChange={onChange}
                               fullWidth/>
                </div>
                <div className={classes.fieldsContainerRow}>
                    <TextField className={classes.field}
                               label={t('Medium')}
                               name={'medium'}
                               value={values.medium}
                               onChange={onChange}
                               fullWidth/>
                    <TextField className={classes.field}
                               label={t('Github')}
                               name={'github'}
                               value={values.github}
                               onChange={onChange}
                               fullWidth/>
                </div>
            </div>
            <Button onClick={onSave}>Save</Button>
        </Paper>
    );
};

AdminProfile.propTypes = {};

export default AdminProfile;