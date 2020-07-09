import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "../../hooks/translation";
import Paper from "../../components/Paper";
import {usePostTransition} from "../../hooks/postTransition";
import {tileData} from "../Home/components/PostList";
import {useHistory, useParams, useLocation} from "react-router-dom";
import {Fade, Slug} from "../Home/components/Primitives";
import Container from "@material-ui/core/Container";

const Post = props => {
    const {t} = useTranslation()
    const {visiblePost, setActivePost} = usePostTransition()
    const history = useHistory()
    const params = useParams()
    const location = useLocation()
    console.log('location', location)
    console.log('history', history)
    useEffect(() => {

        if (visiblePost === null) {
            tileData.map(post => {
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
        <div onClick={()=> history.push('/posts')}>back</div>
        <Paper elevation={3}>
        <div  style={{ backgroundImage: visiblePost.css}}>
            <div className="details" style={{position: "initial"}}>
                <div className="circle"/>
                <img src={visiblePost.img}/>
                <h1>{visiblePost.name}</h1>
                <p>{visiblePost.description}</p>
                <p>{visiblePost.cover}</p>
            </div>
        </div>
        </Paper>
    </Container>
};

Post.propTypes = {};

export default Post;