import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "../../hooks/translation";
import { makeStyles } from '@material-ui/core/styles';
import PostList from "./components/PostList";
import Toolbar from "@material-ui/core/Toolbar";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    home: {
       padding: '16px'
    },

});

const Home = () => {
    const classes = useStyles()
    const {t} = useTranslation()

    return <div className={classes.home}>
        <Toolbar style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div>
                <Link to="/">{t('home')}</Link>
                <Link to="/about">{t('about')}</Link>
                <Link to="/posts">{t('posts')}</Link>
                <Link to="/contact">{t('contact')}</Link>
            </div>
        </Toolbar>
        <PostList/>
    </div>
};

Home.propTypes = {

};

export default Home;