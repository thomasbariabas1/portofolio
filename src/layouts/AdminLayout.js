import React from 'react';
import PropTypes from 'prop-types';
import {authenticationHoc} from "../Hoc/authenticationHoc";
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Group';
import PostsIcon from '@material-ui/icons/LibraryBooks';
import Person from '@material-ui/icons/Person';
import {useHistory, useLocation} from "react-router-dom";
import {useTranslation} from "../hooks/translation";
import GrFlag from "../assets/svg/flags/GrFlag";
import EnFlag from "../assets/svg/flags/EnFlag";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...theme.overrides.appBar.static
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,

    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    itemContainer: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        right: '24px'
    },
    activeListItem: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
}));

const AdminLayout = ({children}) => {
    const classes = useStyles();
    const history = useHistory()
    const {pathname} = useLocation()
    const {t, changeLanguage} = useTranslation()
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleGoHome = () => {
        history.push('/home')
    }

    const listItems = [
        {
            text: 'posts',
            icon: <PostsIcon/>,
            onClick: () => history.push('/admin/posts')
        },
        {
            text: 'about',
            icon: <AboutIcon/>,
            onClick: () => history.push('/admin/about')
        },
        {
            text: 'profile',
            icon: <Person/>,
            onClick: () => history.push('/admin/profile')
        },

    ]
    let title = ''
    listItems.map(item=> {
        if(pathname === `/admin/${item.text}`){
            title = item.text
        }
    })
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {t(title)}
                    </Typography>
                    <div className={classes.itemContainer}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleGoHome}>
                            <HomeIcon/>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={() => {
                                changeLanguage('gr')
                            }}>
                            <GrFlag className={classes.flag}/>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={() => {
                                changeLanguage('en')
                            }}>
                            <EnFlag className={classes.flag}/>
                        </IconButton>

                    </div>

                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}>
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {listItems.map((itemList, index) => (
                        <ListItem button key={itemList.text} className={pathname === `/admin/${itemList.text}` && classes.activeListItem} onClick={itemList.onClick}>
                            <ListItemIcon>{itemList.icon}</ListItemIcon>
                            <ListItemText primary={t(itemList.text)}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </div>
    );
};

AdminLayout.propTypes = {};

export default authenticationHoc(AdminLayout);