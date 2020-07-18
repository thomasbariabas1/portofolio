import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "../../hooks/translation";
import Paper from "../../components/Paper";
import {usePostTransition} from "../../hooks/postTransition";
import posts from '../../assets/posts'
import {useHistory, useParams, useLocation} from "react-router-dom";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import BackButton from "../../components/buttons/BackButton";

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
        padding: '16px'
    }
}));

const Post = props => {
    const {t} = useTranslation()
    const {visiblePost, setActivePost} = usePostTransition()
    const history = useHistory()
    const params = useParams()
    const classes = useStyles();

    useEffect(() => {

        if (visiblePost === null) {
            posts.map(post => {
                if (post.id === params.id) {
                    setActivePost(post)
                }
            })
        }
    }, [])

    if (!visiblePost) {
        return null
    }
    return <Container>
        <BackButton backLocation={'/posts'} text={t('backToPosts')}/>
        <Paper elevation={3}>
        <div>
            <div className={classes.postContainer} style={{position: "initial"}}>
                <div className="circle"/>
                <img src={visiblePost.img} className={classes.coverImage}/>
                <h1>{visiblePost.name}</h1>
                <p>{visiblePost.description}</p>
                <div dangerouslySetInnerHTML={{__html:visiblePost.body}}/>
            </div>
        </div>
        </Paper>
    </Container>
};

Post.propTypes = {};

export default Post;