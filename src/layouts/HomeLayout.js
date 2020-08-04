import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import {useTranslation} from "../hooks/translation";
import {useMobile} from "../hooks/mobile";
import {useInstance} from "../hooks/instance";

const useStyles = makeStyles((theme)=>({
    root: {
    height: '40%',
    minHeight:'300px',
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
        '@media (max-width: 480px)': {
            marginTop: '-50px'
        }
        },
    name: {
        color: 'white'
    }
}));

const HomeLayout = ({children}) => {
    const styles = useStyles()
    const isMobile = useMobile()
    const {t} = useTranslation()
    const {instance} = useInstance()

    return (<Fragment>
            <div className={styles.root} style={{background: `url(${instance.homePageImg})`}}>
                <span className={styles.name}>{t(instance.firstName)} {t(instance.lastName)}</span>
            </div>
        <Container className={styles.homeLayout} style={isMobile?{paddingLeft:'0px', paddingRight: '0px'}:{}}>
            {children}
        </Container>
        </Fragment>
    );
};

HomeLayout.propTypes = {
    
};

export default HomeLayout;