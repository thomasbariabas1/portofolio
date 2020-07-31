import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    loginContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
const LoginLayout = ({children}) => {
    const classes = useStyles()
    return (
        <div className={classes.loginContainer}>
            {children}
        </div>
    );
};

LoginLayout.propTypes = {

};

export default LoginLayout;