import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring'
import Paper from "../../../components/Paper";
import Typography from "@material-ui/core/Typography";
import GridListTile from "@material-ui/core/GridListTile";
import {usePostTransition} from "../../../hooks/postTransition";
import {useTranslation} from "../../../hooks/translation";
import {useMobile} from "../../../hooks/mobile";
import {postCardDateFormat} from "../../../util/dateUtils";
import Author from "../../../components/Author";

const calc = (x, y, bounding) =>{
    return [-(y - bounding.bottom + bounding.y - (bounding.height/4) ) /20, (x - bounding.x - (bounding.width/2) ) / 20, 1]
}
const trans = (x, y, s) => `perspective(1600px) rotateX(${x/3}deg) rotateY(${y/3}deg) scale(${s*0.9})`

const PostCard = ({classes, post, resizeMasonryItem}) => {
    const cardRef = useRef(null)
    const coverTextRef = useRef(null)
    const paperRef = useRef(null)
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 100, friction: 50 } }))
    const {setActivePost} = usePostTransition()
    const [bounding, setBounding] = useState({x:0, y:0, width:0, height:0})
    const [showMore, setShowMore] = useState(false)
    const [cardExpanded, setCardExpanded] = useState(false)
    const [span, setSpan] = useState('')

    useEffect(()=>{
        setSpan(resizeMasonryItem(paperRef.current))
    }, [cardExpanded])

    useEffect(()=>{
        handleSetBounding(cardRef.current)
        if(post){
            const coverTextBounds = coverTextRef.current.getBoundingClientRect()
            if(coverTextBounds.height >=180){
                setShowMore(true)
            }
            setSpan(resizeMasonryItem(paperRef.current))
        }

    }, [])

    const handleSetBounding = (ref) => {
        setBounding(ref && ref.getBoundingClientRect())
    }

    const handleShowMore = (e) =>{
        e.stopPropagation()
        setCardExpanded(!cardExpanded)
    }
    if(!post) {
        return null
    }
    const {firstName, lastName, profileImg} = post.person

    return (
        <animated.div
            className="card"
            ref={cardRef}
            onMouseLeave={() => set({xys: [0, 0, 1]})}
            style={{transform: props.xys.interpolate(trans), gridRowEnd: span}}
            onClick={()=>setActivePost(post)}
        >
            <div ref={paperRef}>
            <Paper  elevation={3} className={classes.tile}>

                <img src={post.coverImg} alt={post.title} className={classes.coverImage}/>
                <Typography>
                    <div style={{fontWeight:'bold', marginBottom:'8px'}}>{post.title}</div>
                </Typography>
                <Typography>
                    <div ref={coverTextRef} className={classes.coverText} style={cardExpanded? {maxHeight: 'initial'}:{}}>{post.coverText}</div>
                </Typography>
                {showMore && <div className={classes.showMore} onClick={handleShowMore}>Show {cardExpanded? 'less': 'more'}</div>}

                <Author creationDate={post.creationDate} firstName={firstName} lastName={lastName} profileImg={profileImg}/>
            </Paper>
            </div>
        </animated.div>
    );
};

PostCard.propTypes = {

};

export default PostCard;