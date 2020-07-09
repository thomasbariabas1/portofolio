import React, {useContext, useState} from 'react'
import { useHistory } from "react-router-dom";

const PostTransitionContext = React.createContext(null);

const PostTransitionProvider = ({children}) => {
    const context = React.useContext(PostTransitionContext)

    const [visiblePost, setVisiblePost] = useState(context)
    const history = useHistory()
    const setActivePost = (post) => {
        history.push('/post/'+post.id)
        setVisiblePost(post)
    }


    return <PostTransitionContext.Provider value={{visiblePost, setActivePost}}>
        {children}
    </PostTransitionContext.Provider>
}

export const usePostTransition = () => {
    return useContext(PostTransitionContext)
}

export  {PostTransitionProvider, PostTransitionContext}