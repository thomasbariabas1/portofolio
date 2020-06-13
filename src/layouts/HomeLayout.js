import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
    backgroundImage: `url(${require("../assets/images/blog-cover.jpg")})`,
    height: '500px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
        alignItems:'center',
        justifyContent: 'center'
    },
    homeLayout: {
        marginTop: '-140px',
    },
    name: {
        color: 'white'
    }
});

const HomeLayout = ({children}) => {
    const styles = useStyles()

    return (<Fragment>
            <div className={styles.root}>
                <span className={styles.name}>Theoxaros</span>
            </div>
        <Container className={styles.homeLayout}>
            {children}
        </Container>
        </Fragment>
    );
};

HomeLayout.propTypes = {
    
};

export default HomeLayout;