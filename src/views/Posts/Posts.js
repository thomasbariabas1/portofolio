import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "../../hooks/translation";
import Paper from "../../components/Paper";
import {usePostTransition} from "../../hooks/postTransition";
import {useHistory, useParams, useLocation} from "react-router-dom";
import {Fade, Slug} from "../Home/components/Primitives";
import Container from "@material-ui/core/Container";
import posts from "../../assets/posts";
import PostCard from "../Home/components/PostCard";
import {makeStyles} from "@material-ui/core/styles";

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
        }
    },
    coverImage: {
        height:' 300px',
        width: '100%'
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
    }
}));

const Posts = props => {
    const classes = useStyles();

    return <Container>
            <div className={classes.root}>

            {posts.map((post, index) => (
                <PostCard classes={classes} post={post} cols={1}/>
            ))}
            </div>
    </Container>
};

Posts.propTypes = {};

export default Posts;