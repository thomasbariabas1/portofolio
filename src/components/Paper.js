import React from 'react';
import PropTypes from 'prop-types';
import MuiPaper from '@material-ui/core/Paper';

const Paper = ({elevation, className, children}) => {
    return <MuiPaper elevation={elevation} className={className}>
        {children}
    </MuiPaper>
};

Paper.propTypes = {
    elevation: PropTypes.number,
    className: PropTypes.string
};

Paper.defaultProps = {
    elevation: 0,
    className: ''
}
export default Paper;