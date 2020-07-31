import React, {Fragment} from 'react';
import AppBar from "../components/AppBar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {useMobile} from "../hooks/mobile";

const MainLayout = ({children, ...props}) => {
    const isMobile = useMobile()
    return (
        <Fragment>
            <AppBar {...props}/>
            <Container style={isMobile?{paddingLeft:'0px', paddingRight: '0px'}:{}}>
                <Box my={2}>
                    {children}
                </Box>
            </Container>
        </Fragment>

    );
};

MainLayout.propTypes = {};

export default MainLayout;