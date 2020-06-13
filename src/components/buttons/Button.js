import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@material-ui/core/Button';

const Button = ({onClick, children}) => {
    return (<MuiButton onClick={onClick} variant="contained">{children}</MuiButton>
    );
};

Button.propTypes = {

};

export default Button;