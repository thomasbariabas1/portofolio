import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { useTranslation} from "../../hooks/translation";
import Paper from "../../components/Paper";

const Posts = props => {
    const {t} = useTranslation()

    return <Paper elevation={3}>
        <h2 >{t('posts')}</h2>
    </Paper>
};

Posts.propTypes = {

};

export default Posts;