import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { useTranslation} from "../../hooks/translation";
import Paper from "../../components/Paper";

const About = props => {
    const {lang,t} = useTranslation()

    return <Paper elevation={3}>
        <h2 style={{height:'2000px'}}>{t('about')}</h2>
    </Paper>
};

About.propTypes = {

};

export default About;