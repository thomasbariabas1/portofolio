import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from "../../../components/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
    tile: {
        margin: '8px',
        padding: '8px'
    }
}));
const tileData = [
    {
        img: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
        title: 'Breakfast',
        author: 'jill111',
        cols: 3,
        featured: true,
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
        title: 'Tasty burger',
        author: 'director90',
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
        title: 'Morning',
        author: 'fancycrave1',
        featured: true,
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/hats.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/honey.jpg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
        title: 'Vegetables',
        author: 'jill111',
        cols: 2,
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/plant.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/mushroom.jpg',
        title: 'Mushrooms',
        author: 'PublicDomainPictures',
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/olive.jpg',
        title: 'Olive oil',
        author: 'congerdesign',
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/star.jpg',
        title: 'Sea star',
        cols: 2,
        author: '821292',
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/bike.jpg',
        title: 'Bike',
        author: 'danfador',
    },
];


const PostList = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={'auto'} className={classes.gridList} cols={3}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <Paper elevation={3} className={classes.tile}>
                        <img src={tile.img} alt={tile.title}  style={{height:' 300px'}}/>
                        </Paper>
                    </GridListTile>

                ))}
            </GridList>
        </div>
    );
};

PostList.propTypes = {
    
};

export default PostList;