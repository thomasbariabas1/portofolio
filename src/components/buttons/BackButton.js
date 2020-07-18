import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    backButtonContainer: {
        display:'flex',
        alignItems: 'center'
    },
    backButton: {
        color: '#1f2d4f',
        fontSize: '16px',
        fontWeight: 'bold',
        textDecoration: 'none',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        '&:after': {
            background: 'none repeat scroll 0 0 transparent',
            content: '""',
            display: 'block',
            height: '2px',
            position: 'absolute',
            backgroundColor: '#1f2d4f',
            transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
            width: '0px'
        },
        '&:hover:after': {
            width: '100%',
            left: 0
        }
    },
    backButtonIcon: {
        borderLeft: '2px solid #1f2d4f',
        borderBottom: '2px solid #1f2d4f',
        transform: 'rotate(45deg)',
        width: '8px',
        height: '8px'
    }
})

const BackButton = ({backLocation, text}) => {
    const classes = useStyles()
    const history = useHistory()

    return (
        <div className={classes.backButtonContainer}>
            <div className={classes.backButtonIcon}/>
            <div className={classes.backButton} onClick={()=> history.push(backLocation)}>
                {text}
            </div>
        </div>
    );
};

BackButton.propTypes = {
    text: PropTypes.string,
    backLocation: PropTypes.string
};

BackButton.defaultProps = {
    text: 'back'
}

export default BackButton;