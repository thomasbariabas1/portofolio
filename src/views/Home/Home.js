import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "../../hooks/translation";
import {makeStyles} from '@material-ui/core/styles';
import PostList from "./components/PostList";
import Toolbar from "@material-ui/core/Toolbar";
import {Link} from "react-router-dom";
import {useLocation, useHistory} from "react-router-dom";
import clx from 'classnames'
import {useMobile} from "../../hooks/mobile";
import {usePosts} from "../../hooks/posts";
import PostCard from "./components/PostCard";

const useStyles = makeStyles((theme) => ({
    home: {
        padding: '16px',
        '@media (max-width: 480px)': {
            padding: '0px',
        }
    },
    links: {
        color: 'white',
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
        opacity: '1'
    },
    tile: {
        padding: '8px',
        transition: 'background-color 500ms ease-in-out',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#e5e5e5'
        }
    },
    coverImage: {
        maxHeight: '300px',
        width: '100%',
        '@media (max-width: 480px)': {
            maxHeight: '200px',
        }
    },
    coverText: {
        transition: 'height 1s easy-in-out',
        maxHeight: '200px',
        overflow: 'hidden'
    },
    showMore: {
        textDecoration: 'underline',
        color: 'blue'
    },
}));

const Home = () => {
    const classes = useStyles()
    const {t} = useTranslation()
    const history = useHistory()
    const {pathname} = useLocation()
    const isMobile = useMobile()
    const {posts, getPosts} = usePosts()

    let firstPost = null
    let restPosts = null
    useEffect(()=>{
        getPosts()
    }, [])

    if(posts) {
        const [_firstPost, ..._restPosts] = posts
        firstPost = _firstPost
        restPosts = _restPosts
    }
    return <div className={classes.home}>
        <Toolbar style={{display: 'flex', flexDirection: 'row', justifyContent: isMobile? 'center':'space-between'}}>
            <div>
                <span onClick={() => history.push('/')}
                      style={isMobile?{fontSize:'14px', padding:'0px',}:{}}
                      className={classes.links + ` ${pathname === '/' && classes.activeLink}`}>
                    {t('home')}
                </span>
                <span onClick={() => history.push('/about')}
                      style={isMobile?{fontSize:'14px', padding:'0px'}:{}}
                      className={classes.links + ` ${pathname === '/about' && classes.activeLink}`}>
                    {t('about')}
                </span>
                <span onClick={() => history.push('/posts')}
                      style={isMobile?{fontSize:'14px', padding:'0px'}:{}}
                      className={classes.links + ` ${pathname === '/posts' && classes.activeLink}`}>
                    {t('posts')}
                </span>
                <span onClick={() => history.push('/contact')}
                      style={isMobile?{fontSize:'14px', padding:'0px'}:{}}
                      className={classes.links + ` ${pathname === '/contact' && classes.activeLink}`}>
                    {t('contact')}
                </span>
            </div>
        </Toolbar>
        {posts ?<PostCard classes={classes} post={firstPost} resizeMasonryItem={()=>{}}/> : null}
        <PostList posts={restPosts}/>
    </div>
};

Home.propTypes = {};

export default Home;