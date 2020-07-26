import React from 'react';
import AppBar from "../components/AppBar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {useMobile} from "../hooks/mobile";

const MainLayout = ({children, ...props}) => {
    const isMobile = useMobile()
    return (
        <div>
            <AppBar {...props}/>
            <Container>
                <Box my={2}>
                    {children}
                </Box>
            </Container>
        </div>

    );
};

MainLayout.propTypes = {};

export default MainLayout;