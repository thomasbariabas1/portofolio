import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import {useMobile} from "../../hooks/mobile";
import PostList from "../Home/components/PostList";
import {usePosts} from "../../hooks/posts";

const Posts = props => {
    const isMobile = useMobile()
    const {posts, getPosts} = usePosts()

    useEffect(()=>{
        getPosts()
    }, [])

    return <Container style={isMobile ? {paddingLeft: '0px', paddingRight: '0px'} : {}}>
        <PostList posts={posts}/>
    </Container>
};

Posts.propTypes = {};

export default Posts;