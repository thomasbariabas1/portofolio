import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { useTranslation} from "../../hooks/translation";
import Paper from "../../components/Paper";
import authorImg  from '../../assets/images/theoxarisImg.jpeg'
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

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
    const {lang,t} = useTranslation()
    const classes = useStyles()
    return (
        <Container>
            <div className={classes.pageTitle}>{t('about')}</div>
            <div className={classes.authorMainDetailsContainer}>
            <img src={authorImg}/>
            <div>{t('george')} {t('theoxaris')}</div>
            </div>
        </Container>
    )
};

About.propTypes = {

};

export default About;