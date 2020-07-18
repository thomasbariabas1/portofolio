import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring'
import Paper from "../../../components/Paper";
import Typography from "@material-ui/core/Typography";
import GridListTile from "@material-ui/core/GridListTile";
import {usePostTransition} from "../../../hooks/postTransition";

const calc = (x, y, bounding) =>{
    return [-(y - bounding.bottom + bounding.y - (bounding.height/4) ) /20, (x - bounding.x - (bounding.width/2) ) / 20, 1]
}
const trans = (x, y, s) => `perspective(1600px) rotateX(${x/2}deg) rotateY(${y/2}deg) scale(${s*0.9})`

const PostCard = ({classes, post, cols}) => {
    const cardRef = useRef(null)
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 100, friction: 50 } }))
    const {setActivePost} = usePostTransition()
    const [bounding, setBounding] = useState({x:0, y:0, width:0, height:0})

    useEffect(()=>{
        handleSetBounding(cardRef.current)
    }, [])

    const handleSetBounding = (ref) => {
        setBounding(ref && ref.getBoundingClientRect())
    }

    return (
        <animated.div
            className="card"
            ref={cardRef}
            onMouseMove={({clientX: x, clientY: y, ...rest}) => set({xys: calc(x, y, bounding)})}
            onMouseLeave={() => set({xys: [0, 0, 1]})}
            style={{transform: props.xys.interpolate(trans), width: `${cols * 33}%`}}
            onClick={()=>setActivePost(post)}
        >
            <Paper elevation={3} className={classes.tile}>

                <img src={post.img} alt={post.title} className={classes.coverImage}/>
                <Typography>
                    <div style={{fontWeight:'bold', marginBottom:'8px'}}>{post.title}</div>
                </Typography>
                <Typography>
                    <div>{post.coverText}</div>
                </Typography>
                <div className={classes.authorContainer}>
                    <img src={post.authorImg} className={classes.authorImg}/>
                    <div className={classes.authorDetails}>
                        {post.authorName}
                        <div>{post.creationDate}</div>
                    </div>
                </div>
            </Paper>
        </animated.div>
    );
};

PostCard.propTypes = {

};

export default PostCard;