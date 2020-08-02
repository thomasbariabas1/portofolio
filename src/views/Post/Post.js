import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "../../hooks/translation";
import Paper from "../../components/Paper";
import {usePostTransition} from "../../hooks/postTransition";
import {useParams} from "react-router-dom";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import BackButton from "../../components/buttons/BackButton";
import {usePosts} from "../../hooks/posts";
import {constructEditorsData} from "../../util/posts";
import './style.css'

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
        width: '90%',
        margin: '16px auto'
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
    postContainer: {
        margin: '16px',
        padding: '16px',
        '@media (max-width: 480px)':{
            margin: '8px',
            padding: '8px',
        }

    }
}));

const Post = props => {
    const {t} = useTranslation()
    const {id} = useParams()
    const {visiblePost} = usePostTransition()
    const {getPost, clearPost} = usePosts()
    const classes = useStyles();

    useEffect(() => {
        getPost(id)
        return ()=>{
            clearPost()
        }
    }, [])

    if (!visiblePost) {
        return null
    }

    const body = constructEditorsData(visiblePost.body)

    return <Container>
        <BackButton backLocation={'/posts'} text={t('backToPosts')}/>
        <Paper elevation={3}>
            <div className={classes.postContainer} style={{position: "initial"}}>
                <div className="circle"/>
                {
                    visiblePost.coverImg? <img src={visiblePost.coverImg} className={classes.coverImage}/> : null
                }
                <h1>{visiblePost.name}</h1>
                <p>{visiblePost.description}</p>
                <div>{body}</div>
            </div>
        </Paper>
    </Container>
};

Post.propTypes = {};

export default Post;