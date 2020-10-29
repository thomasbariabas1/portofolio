import React, {Fragment} from 'react';
import AppBar from "../components/AppBar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {useMobile} from "../hooks/mobile";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({

    footer: {
        height: "80px",
        position: "absolute",
        bottom:"0",
        display: "flex",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));
const MainLayout = ({children, ...props}) => {
    const isMobile = useMobile()
    const styles = useStyles ()
    return (
        <Fragment>
            <AppBar {...props}/>
            <Container style={isMobile?{paddingLeft:'0px', paddingRight: '0px'}:{}}>
                <Box my={2}>
                    {children}
                </Box>
            </Container>
            <div className={styles.footer}>
                theoBlogaros
            </div>
        </Fragment>

    );
};

MainLayout.propTypes = {};

export default MainLayout;