import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import PostCard from "./PostCard";
import {useMobile} from "../../../hooks/mobile";
import {usePosts} from "../../../hooks/posts";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
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
        height:' 300px',
        width: '100%',
        '@media (max-width: 480px)':{
            height:'200px',
        }
    },
    authorContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '16px'
    },
    authorImg: {
        width: '48px',
        height: '48px',
        borderRadius: '50%'
    },
    authorDetails: {
        marginLeft: '4px'
    },
    coverText: {
        transition: 'height 1s easy-in-out',
        maxHeight:'200px',
        overflow: 'hidden'
    },
    showMore: {
        textDecoration: 'underline',
        color: 'blue'
    }
}));

const PostList = props => {
    const classes = useStyles();
    const isMobile = useMobile()
    const {posts, getPosts} = usePosts()
    useEffect(()=>{
        getPosts()
    }, [])

    return (
        <div className={classes.root}>
                {posts.map((post, index) => (
                       <PostCard classes={classes} post={post} cols={isMobile ? 3 :index === 0 ? 3:  1}/>
                ))}
        </div>
    );
};

PostList.propTypes = {

};

export default PostList;