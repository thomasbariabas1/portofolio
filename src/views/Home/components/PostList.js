import React, {useEffect, useRef, Fragment} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import PostCard from "./PostCard";
import PostsLoader from "../../../components/PostsLoader";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridGap: "1em",
        gridTemplateColumns: 'repeat( auto-fill, minmax( 30%, 1fr ) )',
        gridAutoRows: '0',
        '@media (max-width: 480px)': {
            display: 'flex',
            flexDirection: 'column',
            gridGap: "initial",
            gridTemplateColumns: 'initial',
            gridAutoRows: 'initial'
        },
        padding: '8px'
    },

    tile: {
        padding: '8px',
        transition: 'background-color 500ms ease-in-out',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#e5e5e5'
        }
    },
    coverImage: {
        maxHeight: '300px',
        width: '100%',
        '@media (max-width: 480px)': {
            maxHeight: '200px',
        }
    },
    coverText: {
        transition: 'all 1s ease-in-out',
        maxHeight: '200px',
        overflow: 'hidden',
        height: 'auto'
    },
    showMore: {
        textDecoration: 'underline',
        color: 'blue'
    },
    loadingCards: {
        marginTop: '48px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        '@media (max-width: 480px)': {
            marginTop: '60px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%'
        }
    },
    postCard: {
        transition: 'all 1s ease-in-out',
    }
}));

const PostList = ({posts}) => {
    const classes = useStyles();
    const masonryContainerRef = useRef(null)

    const resizeMasonryItem = (masonryRef) => (item) => {
        if (masonryRef && item) {
            /* Get the grid object, its row-gap, and the size of its implicit rows */
            let grid = masonryContainerRef.current
            let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'))
            let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'))
            /*
             * Spanning for any brick = S
             * Grid's row-gap = G
             * Size of grid's implicitly create row-track = R
             * Height of item content = H
             * Net height of the item = H1 = H + G
             * Net height of the implicit row-track = T = G + R
             * S = H1 / T
             */
            let rowSpan = Math.ceil((item.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

            /* Set the spanning as calculated above (S) */
            return 'span ' + rowSpan;
        }
        return ''
    }
    return (
        <div ref={masonryContainerRef} className={classes.root}>
            {posts ? posts.map((post, index) => (
                    <PostCard classes={classes}
                              key={post.title + index}
                              post={post}
                              resizeMasonryItem={resizeMasonryItem(masonryContainerRef.current)}/>
                )) :
                <Fragment>
                    <div className={classes.loadingCards}>
                        <PostsLoader/>
                    </div>
                    <div className={classes.loadingCards}>
                        <PostsLoader/>
                    </div>
                    <div className={classes.loadingCards}>
                        <PostsLoader/>
                    </div>
                </Fragment>}
        </div>
    );
};

PostList.propTypes = {};

export default PostList;