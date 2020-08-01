import React, {useContext, useState} from 'react'
import API from "../api/API";
import {useParams} from "react-router-dom";
import {usePostTransition} from "./postTransition";
const PostContext = React.createContext(null);

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
         return API.GetPost(postId).then(post => {
            setVisiblePost(post)
             return post
        })
    }
    const clearPost = () => {
        setVisiblePost(null)
    }
    return <PostContext.Provider value={{posts, getPosts, getPost, clearPost}}>
        {children}
    </PostContext.Provider>
}

export const usePosts = () => {
    return useContext(PostContext)
}

export  {PostProvider, PostContext}