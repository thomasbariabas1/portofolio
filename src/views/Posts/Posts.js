import React, { useEffect} from 'react';
import Container from "@material-ui/core/Container";
import PostCard from "../Home/components/PostCard";
import {makeStyles} from "@material-ui/core/styles";
import {useMobile} from "../../hooks/mobile";
import {usePosts} from "../../hooks/posts";
import PostsLoader from "../../components/PostsLoader";

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
            backgroundColor: 'rgba(0,0,0,0.1)'
        },

    },
    coverImage: {
        height:'300px',
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

const Posts = props => {
    const classes = useStyles();
    const isMobile = useMobile()
    const {posts, getPosts} = usePosts()
    useEffect(()=>{
        getPosts()
    }, [])

    return <Container style={isMobile?{paddingLeft:'0px', paddingRight: '0px'}:{}}>
            <div className={classes.root}>

            {posts ? posts.map((post, index) => (
                <PostCard classes={classes} post={post} cols={isMobile? 3 : 1}/>
            )):<div>
                <PostsLoader/>
                <PostsLoader/>
                <PostsLoader/>
            </div>}
            </div>
    </Container>
};

Posts.propTypes = {};

export default Posts;