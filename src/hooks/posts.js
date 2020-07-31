import React, {useContext, useState} from 'react'
import API from "../api/API";
import {useParams} from "react-router-dom";
import {usePostTransition} from "./postTransition";
const PostContext = React.createContext([]);

const PostProvider = ({children}) => {
    const context = React.useContext(PostContext)

    const [posts, setPosts] = useState(context)
    const {setVisiblePost} = usePostTransition()

    const getPosts = () => {
        return API.GetPosts({page:0, pageSize:1000}).then(posts=>{
            setPosts(posts.docs)
        })
    }
    const getPost = (postId) => {
        API.GetPost(postId).then(post => {
            setVisiblePost(post)
        })
    }
    return <PostContext.Provider value={{posts, getPosts, getPost}}>
        {children}
    </PostContext.Provider>
}

export const usePosts = () => {
    return useContext(PostContext)
}

export  {PostProvider, PostContext}