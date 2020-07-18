import React from 'react';
import PropTypes from 'prop-types';

const GrFlag = ({className}) => {
    return (
        <svg className={className} width="32" height="32" viewBox="0 0 27 18">
            <rect fill="#0D5EAF" width="27" height="18"/>
            <path fill="none" strokeWidth="2" stroke="#FFF" d="M5,0V11 M0,5H10 M10,3H27 M10,7H27 M0,11H27 M0,15H27"/>
        </svg>
    );
};

GrFlag.propTypes = {
    className: PropTypes.string
};

export default GrFlag;