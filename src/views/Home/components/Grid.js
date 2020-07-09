import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import Measure from 'react-measure'
import {Transition, animated, interpolate} from 'react-spring/renderprops'
import {usePostTransition} from "../../../hooks/postTransition";

const styles = {
    outer: {position: 'relative', width: '100%', height: '100%'},
    inner: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        minHeight: '100%',
    },
    cell: {
        position: 'absolute',
        willChange: 'transform, width, height, opacity',
    },
}

const Grid = (props) => {
    const [state, setState] = useState({width: 0, height: 0, open: undefined, lastOpen: undefined})
    const outerRef = useRef()
    const innerRef = useRef()

    const scrollOut = e => {
        if (!props.lockScroll) {
            state.open && toggle(undefined)
        }
    }

    const toggle = key => {
        setState(
            state => ({
                ...state,
                lastOpen: state.open,
                open: state.open === key ? undefined : key,
            }))
    }

    const resize = (width, height, props) =>
        setState({
            ...state,
            [width]: props.client.width,
            [height]: props.client.height,
        })

    const resizeOuter = props => resize('widthOuter', 'heightOuter', props)

    const resizeInner = props => resize('width', 'height', props)

    const update = ({key, x, y, width, height}) => {
        const open = state.open === key
        return {
            opacity: state.open && !open ? 0 : 1,
            x: open ? outerRef.current.scrollLeft : x,
            y: open ? outerRef.current.scrollTop : y,
            width: open ? window.innerHeight : width,
            height: open ? state.heightOuter : height,
        }
    }

    let {
        children,
        columns,
        margin,
        occupySpace,
        impl,
        config,
        data,
        keys,
        heights,
        closeDelay,
        lockScroll,
        ...rest
    } = props

    let {lastOpen, open, width} = state

    let column = 0
    let columnHeights = new Array(columns).fill(0)

    let displayData = data.map((child, i) => {
        let index = occupySpace
            ? columnHeights.indexOf(Math.min(...columnHeights))
            : column++ % columns
        let cellWidth = width / columns - margin / (1 - 1 / (columns + 1))
        let left = cellWidth * index
        let offset = (index + 1) * margin
        let top = columnHeights[index] + margin
        let height = typeof heights === 'function' ? heights(child) : heights
        columnHeights[index] += height + margin
        return {
            x: margin ? left + offset : left,
            y: top,
            width: cellWidth,
            height,
            key: keys(child),
            object: child,
        }
    })

    const overflow = lockScroll ? (open ? 'hidden' : 'auto') : 'auto'

    const height = Math.max(...columnHeights) + margin
    const {setActivePost} = usePostTransition()
    return (
        <Measure
            client
            innerRef={outerRef}
            onResize={resizeOuter}>
            {({measureRef}) => (
                <div
                    ref={measureRef}
                    style={{...styles.outer, ...props.style, overflow}}
                    {...rest}
                    onScroll={scrollOut}
                    onWheel={scrollOut}
                    onTouchMove={scrollOut}>
                    <Measure
                        client
                        innerRef={innerRef}
                        onResize={resizeInner}>
                        {({measureRef}) => (
                            <div ref={measureRef} style={{...styles.inner, height}}>
                                <Transition
                                    native
                                    items={displayData}
                                    keys={d => d.key}
                                    from={{opacity: 0}}
                                    leave={{opacity: 0}}
                                    enter={update}
                                    update={update}
                                    onRest={(props) => {
                                        console.log('rest', props)
                                        if (props.key === state.open) {
                                            setActivePost(props.object)
                                        }

                                    }}
                                    impl={impl}
                                    config={{
                                        ...config,

                                    }}>
                                    {(c, i) => ({opacity, x, y, width, height}) => (
                                        <animated.div
                                            style={{
                                                position: 'absolute',
                                                ...styles.cell,
                                                opacity,
                                                width: open === c.key ? '100%': width,
                                                height,
                                                zIndex:
                                                    lastOpen === c.key || open === c.key ? 1000 : i,
                                                transform: interpolate(
                                                    [x, y],
                                                    (x, y) => `translate3d(${x}px,${y}px, 0)`
                                                ),
                                            }}
                                            children={children(c.object, open === c.key, () =>
                                                toggle(c.key)
                                            )}
                                        />
                                    )}
                                </Transition>
                            </div>
                        )}
                    </Measure>
                </div>
            )}
        </Measure>
    )

}

Grid.propTypes = {
    data: PropTypes.array,
    keys: PropTypes.func,
    occupySpace: PropTypes.bool,
    columns: PropTypes.number,
    margin: PropTypes.number,
    heights: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    lockScroll: PropTypes.bool,
    closeDelay: PropTypes.number,
}

Grid.defaultProps = {
    occupySpace: true,
    columns: 3,
    margin: 0,
    heights: 400,
    lockScroll: false,
    closeDelay: 0,
}

export default Grid