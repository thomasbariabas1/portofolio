import React, {useContext, useState} from 'react'
import { useHistory } from "react-router-dom";
import API from "../api/API";

const PostTransitionContext = React.createContext(null);

const PostTransitionProvider = ({children}) => {
    const context = React.useContext(PostTransitionContext)
    const [post, setPost] = useState(context)

    const history = useHistory()
    const setActivePost = (post) => {
        history.push('/post/' + post._id)
    }
    const setVisiblePost = (post) => {
        setPost(post)
    }

    return <PostTransitionContext.Provider value={{visiblePost:post, setActivePost, setVisiblePost}}>
        {children}
    </PostTransitionContext.Provider>
}

export const usePostTransition = () => {
    return useContext(PostTransitionContext)
}

export  {PostTransitionProvider, PostTransitionContext}