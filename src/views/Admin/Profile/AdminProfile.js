import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Paper from "../../../components/Paper";
import {useTranslation} from "../../../hooks/translation";
import {makeStyles} from "@material-ui/core/styles";
import {Divider} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {usePerson} from "../../../hooks/person";

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

    useEffect(()=>{
        getPerson()
    }, [])

    if(!person) {
        return null
    }
    const onChangeProfileImg = ({target: {name, value, files}}) =>{
        // if(files && files[0]) {
        //     const reader = new FileReader()
        //     reader.addEventListener('load', (event) => {
        //         const result = event.target.result;
        //         setValues(prevState => ({...prevState, coverImg: value, coverImgData: result}))
        //     });
        //     reader.readAsDataURL(files[0]);
        //
        // }
    }
    return (
        <Paper elevation={3} className={classes.container}>
            <h2>{t('personalDetails')}</h2>
            <div className={classes.fieldsContainerColumn}>
                <div className={classes.fieldsContainerRow}>
                    <TextField className={classes.field}
                               label={t('name')}
                               name={'firstName'}
                               value={person ? person.firstName :'a'}
                               fullWidth/>
                    <TextField className={classes.field}
                               label={t('surname')}
                               name={'lastName'}
                               value={person ? person.lastName : 'a'}
                               fullWidth/>
                </div>
                {/*<TextField type={'file'}*/}
                {/*           name={'coverImg'}*/}
                {/*           inputProps={{*/}
                {/*               accept:"image/jpeg,image/png"*/}
                {/*           }}*/}
                {/*           value={person.coverImg}*/}
                {/*           className={classes.field}*/}
                {/*           onChange={onChangeProfileImg}*/}
                {/*           label={t('coverImg')}*/}
                {/*           fullWidth/>*/}
            </div>
            <Divider/>
            <h2>{t('socialLinks')}</h2>
            <div className={classes.fieldsContainerColumn}>
                <div className={classes.fieldsContainerRow}>
                    <TextField className={classes.field}
                               label={t('Facebook')}
                               name={'facebook'}
                               value={person ? person.facebook: ''}
                               fullWidth/>
                    <TextField className={classes.field}
                               label={t('Twitter')}
                               name={'twitter'}
                               value={person? person.twitter: ''}
                               fullWidth/>
                </div>
                <div className={classes.fieldsContainerRow}>
                    <TextField className={classes.field}
                               label={t('Medium')}
                               name={'medium'}
                               value={person? person.medium: ''}
                               fullWidth/>
                    <TextField className={classes.field}
                               label={t('Github')}
                               name={'github'}
                               value={person? person.github: ''}
                               fullWidth/>
                </div>
            </div>
        </Paper>
    );
};

AdminProfile.propTypes = {};

export default AdminProfile;