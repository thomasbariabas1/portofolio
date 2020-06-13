import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { useTranslation} from "../../hooks/translation";
import Paper from "../../components/Paper";

const Contact = props => {
    const {t} = useTranslation()

    return <Paper elevation={3}>
        <h2>{t('contact')}</h2>
    </Paper>
};

Contact.propTypes = {

};

export default Contact;