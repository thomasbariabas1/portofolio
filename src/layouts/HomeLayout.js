import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import {useTranslation} from "../hooks/translation";
import {useMobile} from "../hooks/mobile";
import {useInstance} from "../hooks/instance";
import {usePalette} from "../hooks/palette";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '40%',
        minHeight: '300px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    homeLayout: {
        marginTop: '-140px',
        '@media (max-width: 480px)': {
            marginTop: '-50px'
        }
    },
    name: {
        color: 'white',
        transition: 'color 0.5s ease-in-out'
    },
    footer: {
        height: "80px",
        position: "absolute",
        bottom:"0",
        display: "flex",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#cbe9f6",
    }
}));

const HomeLayout = ({children}) => {
    const [color, setColor] = useState("hsl(0, 0%, 100%)")
    const styles = useStyles()
    const isMobile = useMobile()
    const {t} = useTranslation()
    const {instance} = useInstance()
    const vibrantColor = usePalette(instance.homePageImg)
    useEffect(()=>{
        if(vibrantColor.length) {
            const perceivedLightness = (vibrantColor[0]*0.2126 + vibrantColor[1]*0.7152 + vibrantColor[2]*0.0722)/255
            setColor(`hsl(0, 0%, ${(perceivedLightness - 0.8) < 0 ? 0: 100}%)`)
        }
    }, [vibrantColor])

    return (<Fragment>
            <div className={styles.root} style={{background: `url(${instance.homePageImg})`}}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: "100%",
                    backgroundColor: `rgba(${vibrantColor.join(",")}, 0.3)`
                }}>
                    <span className={styles.name} style={{color}}>{t(instance.firstName)} {t(instance.lastName)}</span>
                </div>
            </div>
            <Container className={styles.homeLayout} style={isMobile ? {paddingLeft: '0px', paddingRight: '0px'} : {}}>
                {children}
            </Container>
            <div className={styles.footer}>
            theoBlogaros
            </div>
        </Fragment>
    );
};

HomeLayout.propTypes = {};

export default HomeLayout;