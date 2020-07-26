import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Toolbar from "@material-ui/core/Toolbar";
import MuiAppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useThemeMui from "@material-ui/core/styles/useTheme";
import Switch from "./inputs/Switch";
import {useTheme} from "../hooks/theme";
import {THEMES} from "../util/Enums";
import {useTranslation} from "../hooks/translation";
import {useLocation, useHistory} from "react-router-dom";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import GrFlag from "../assets/svg/flags/GrFlag";
import EnFlag from "../assets/svg/flags/EnFlag";
import {useMobile} from "../hooks/mobile";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactEmailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Group';
import PostsIcon from '@material-ui/icons/LibraryBooks';
import {Divider} from "@material-ui/core";

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
    },
    mobileContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    list: {
        width: 250,
    },
    activeListItem: {
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    logo: {
        marginLeft: '8px'
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
    const isMobile = useMobile()
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const handleChangeTheme = () => {
        if (theme === THEMES.DARK) {
            changeTheme(THEMES.LIGHT)
        } else {
            changeTheme(THEMES.DARK)
        }
    }

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsDrawerOpen(open);
    };

    const list = () => {
        const list = [
            {
                text: 'home',
                icon: <HomeIcon/>,
                onClick: () => history.push('/home')
            },
            {
                text: 'about',
                icon: <AboutIcon/>,
                onClick: () => history.push('/about')
            },
            {
                text: 'posts',
                icon: <PostsIcon/>,
                onClick: () => history.push('/posts')
            },
            {
                text: 'contact',
                icon: <ContactEmailIcon/>,
                onClick: () => history.push('/contact')
            },
        ]
        return (
            <div
                className={classes.list}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    {list.map((itemList, index) => (
                        <ListItem button key={itemList.text} className={pathname === `/${itemList.text}` && classes.activeListItem} onClick={itemList.onClick}>
                            <ListItemIcon>{itemList.icon}</ListItemIcon>
                            <ListItemText primary={t(itemList.text)}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
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
        )
    }
    return (
        <Fragment>
            <ElevationScroll {...props}>
                <MuiAppBar position={'sticky'}>
                    <Toolbar>
                        {
                            !isMobile ? <Container style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div className={classes.logo}>{t('george') + " " + t('theoxaris')}</div>
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

                                        {/*<Switch checked={theme === THEMES.DARK}*/}
                                        {/*        name={'Theme'}*/}
                                        {/*        onChange={handleChangeTheme}/>*/}
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
                                </Container> :
                                <div className={classes.mobileContainer}>
                                    <div className={classes.logo}>{t('george') + " " + t('theoxaris')}</div>
                                    <div className={classes.itemContainer}>
                                        <Fragment>
                                                <IconButton
                                                edge="start"
                                                color="inherit"
                                                aria-label="open drawer"
                                                onClick={toggleDrawer( true)}
                                            >
                                                <MenuIcon/>
                                            </IconButton>
                                            <SwipeableDrawer
                                                anchor={'right'}
                                                open={isDrawerOpen}
                                                onClose={toggleDrawer(false)}
                                                onOpen={toggleDrawer(true)}
                                            >
                                                {list()}
                                            </SwipeableDrawer>
                                        </Fragment>
                                    </div>
                                </div>}
                    </Toolbar>
                </MuiAppBar>
            </ElevationScroll>
            <Toolbar/>
        </Fragment>
    );
};

AppBar.propTypes = {};

export default AppBar;