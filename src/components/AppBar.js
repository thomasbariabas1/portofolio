import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Toolbar from "@material-ui/core/Toolbar";
import MuiAppBar from '@material-ui/core/AppBar';
import {Link} from "react-router-dom";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useThemeMui from "@material-ui/core/styles/useTheme";
import Switch from "./inputs/Switch";
import {useTheme} from "../hooks/theme";
import {THEMES} from "../util/Enums";
import {useTranslation} from "../hooks/translation";
import Button from "./buttons/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {useLocation, useHistory} from "react-router-dom";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import GrFlag from "../assets/svg/flags/GrFlag";
import EnFlag from "../assets/svg/flags/EnFlag";

const useStyles = makeStyles((theme) => ({
    links: theme.appBar.links,
    activeLink: {
        opacity: '1'
    },
    itemContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    flag: {
        cursor: 'pointer',
        margin: '4px',
        position: 'relative',

        '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
            zIndex: 10
        }
    }
}))
const ElevationScroll = (props) => {
    const {children} = props;
    const theme = useThemeMui()

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        style: trigger ? theme.appBar.sticky : theme.appBar.static,
        elevation: trigger ? 4 : 0,
    });
}

const AppBar = props => {
    const {theme, changeTheme} = useTheme()
    const {lang, changeLanguage, t} = useTranslation()
    const {pathname} = useLocation()
    const classes = useStyles()
    const history = useHistory()

    const handleChangeTheme = () => {
        if (theme === THEMES.DARK) {
            changeTheme(THEMES.LIGHT)
        } else {
            changeTheme(THEMES.DARK)
        }
    }

    return (
        <Fragment>
            <ElevationScroll {...props}>
                <MuiAppBar position={'sticky'}>
                    <Toolbar>
                        <Container style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div>logo</div>
                            <div className={classes.itemContainer}>
                                 <span onClick={() => history.push('/')}
                                       className={classes.links + ` ${pathname === '/' && classes.activeLink}`}>
                                          {t('home')}
                                 </span>
                                <span onClick={() => history.push('/about')}
                                      className={classes.links + ` ${pathname === '/about' && classes.activeLink}`}>
                                      {t('about')}
                                 </span>
                                <span onClick={() => history.push('/posts')}
                                      className={classes.links + ` ${pathname === '/posts' && classes.activeLink}`}>
                                      {t('posts')}
                                </span>
                                <span onClick={() => history.push('/contact')}
                                      className={classes.links + ` ${pathname === '/contact' && classes.activeLink}`}>
                                      {t('contact')}
                                </span>

                                <Switch checked={theme === THEMES.DARK}
                                        name={'Theme'}
                                        onChange={handleChangeTheme}/>
                                <div className={classes.itemContainer}>
                                    <div onClick={() => {
                                        changeLanguage('gr')
                                    }}>
                                        <GrFlag className={classes.flag}/>
                                    </div>
                                    <div onClick={() => {
                                        changeLanguage('en')
                                    }}>
                                        <EnFlag className={classes.flag}/>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Toolbar>
                </MuiAppBar>
            </ElevationScroll>
            <Toolbar/>
        </Fragment>
    );
};

AppBar.propTypes = {};

export default AppBar;