import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "../../hooks/translation";
import { makeStyles } from '@material-ui/core/styles';
import PostList from "./components/PostList";
import Toolbar from "@material-ui/core/Toolbar";
import {Link} from "react-router-dom";
import {useLocation, useHistory} from "react-router-dom";
import clx from 'classnames'

const useStyles = makeStyles((theme) => ({
    home: {
       padding: '16px'
    },
    links: {
        color:'white',
        cursor: 'pointer',
        margin: '0 4px',
        padding: '4px',
        opacity: '0.7',
        fontSize: '16px',
        '&:hover': {
            opacity: '1',
        }
        },
    activeLink: {
        opacity:'1'
    }
}));

const Home = () => {
    const classes = useStyles()
    const {t} = useTranslation()
    const history = useHistory()
    const {pathname} = useLocation()

    return <div className={classes.home}>
        <Toolbar style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div>
                <span onClick={()=>history.push('/')}
                      className={classes.links + ` ${pathname ==='/'&&classes.activeLink }`}>
                    {t('home')}
                </span>
                <span onClick={()=>history.push('/about')}
                      className={classes.links + ` ${pathname ==='/about'&&classes.activeLink }`}>
                    {t('about')}
                </span>
                <span onClick={()=>history.push('/posts')}
                      className={classes.links + ` ${pathname ==='/posts'&&classes.activeLink }`}>
                    {t('posts')}
                </span>
                <span onClick={()=>history.push('/contact')}
                      className={classes.links + ` ${pathname ==='/contact'&&classes.activeLink }`}>
                    {t('contact')}
                </span>
            </div>
        </Toolbar>
        <PostList/>
    </div>
};

Home.propTypes = {

};

export default Home;