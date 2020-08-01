import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "../../hooks/translation";
import authorImg from '../../assets/images/theoxarisImg.jpeg'
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import API from "../../api/API";

const useStyles = makeStyles({
    pageTitle: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '32px',
        fontWeight: 'bold'
    },
    authorMainDetailsContainer: {
        display: 'flex'
    }
})
const About = props => {
    const [about, setAbout] = useState({})
    const {t} = useTranslation()
    const classes = useStyles()
    useEffect(() => {
        API.GetAbout().then(about => {
            setAbout(about)
        })
    }, [])

    return (
        <Container>
            <div className={classes.pageTitle}>{t('about')}</div>
            <div className={classes.authorMainDetailsContainer}>
                <img src={"data:image/jpeg;base64," + about.img}/>
                <div>{t(about.firstName)} {t(about.lastName)}</div>
            </div>

            <div>{about.about}</div>
        </Container>
    )
};

About.propTypes = {};

export default About;