import React from 'react';
import PropTypes from 'prop-types';
import MuiSwitch from '@material-ui/core/Switch';

const Switch = ({checked, onChange, name, inputProps, defaultChecked, className}) => {
    return (
        <MuiSwitch
            checked={checked}
            onChange={onChange}
            name={name}
            inputProps={inputProps}
            defaultChecked={defaultChecked}
            className={className}
        />
    );
};

Switch.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
    inputProps: PropTypes.object,
    defaultChecked: PropTypes.bool
};

Switch.defaultProps = {
    defaultChecked: '',
    inputProps: {}
}

export default Switch;