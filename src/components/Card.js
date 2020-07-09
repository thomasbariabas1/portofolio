import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring'
import './Card.css'

const calc = (x, y) => [-(y - (window.innerHeight) / 2) / 20, (x - (window.innerWidth) / 2) / 20, 1]
const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card = ({children, width}) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const [flipped, setFlipped] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        ref: useRef
    })

    return (
        <animated.div onClick={() => setFlipped(state => !state)}
                      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                      onMouseLeave={() => set({ xys: [0, 0, 1] })}
                      style={{height:'500px', width:`${width}%`, overflow:'hidden', transform: props.xys.interpolate(trans)}}>
        <animated.div className="card"

                      style={{ opacity, height:'400px', overflow:'hidden', transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
            {children}
        </animated.div>
            <animated.div className="card"
                          style={{opacity: opacity.interpolate(o => 1 - o), transform, height:'400px', overflow:'hidden' }}>
                {children}
            </animated.div>
        </animated.div>
    )
};

Card.propTypes = {

};

export default Card;