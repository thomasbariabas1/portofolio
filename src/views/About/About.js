import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "../../hooks/translation";
import authorImg from '../../assets/images/theoxarisImg.jpeg'
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import API from "../../api/API";
import GetActiveAbout from "../../api/Calls/GetActiveAbout";
import {constructEditorsData} from "../../util/posts";
import Facebook from "../../assets/svg/facebook";
import Twitter from "../../assets/svg/twitter";
import Medium from "../../assets/svg/medium";
import Github from "../../assets/svg/github";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    pageTitle: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '32px',
        fontWeight: 'bold'
    },
    authorMainDetailsContainer: {
        display: 'flex'
    },
    name: {
        fontSize: '22px',
        marginLeft: '8px',
        fontWeight: 'bold'
    },
    mainInformationContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    socialIconsContainer: {
        margin: '8px',
        display:'flex'
    },
    socialIcons : {
        width: '20px',
        height: '20px',
        margin: '4px',
        padding: '8px',
        cursor: 'pointer',
        borderRadius: '20%',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#e0dede'
        }
    },
    aboutUs: {
        margin :'16px',
        display: 'flex',
        padding: '8px',
        backgroundColor: '#f2f2f2',
        borderRadius: '8px'
    }
})
const About = props => {
    const [about, setAbout] = useState({})
    const {t} = useTranslation()
    const classes = useStyles()
    const history = useHistory()

    useEffect(() => {
        API.GetActiveAbout().then(about => {
            setAbout(about)
        })
    }, [])

    const handleSocialIconClick = (socialLink) => {
        history.push(socialLink)
    }

    return (
        <Container>
            <div className={classes.pageTitle}>{t('about')}</div>
            <div className={classes.authorMainDetailsContainer}>
                <img src={"data:image/jpeg;base64," + about?.person?.profileImg}/>
                <div className={classes.mainInformationContainer}>
                    <div className={classes.name}>{t(about?.person?.firstName)} {t(about?.person?.lastName)}</div>
                    <div className={classes.socialIconsContainer}>
                        {about?.person?.facebook ? <a href={'//'+about?.person?.facebook} target="_blank">
                            <Facebook className={classes.socialIcons}/>
                        </a> : null}
                        {about?.person?.twitter ?<a href={'//'+about?.person?.twitter} target="_blank">
                            <Twitter className={classes.socialIcons}/>
                        </a> : null}
                        {about?.person?.medium ?<a href={'//'+about?.person?.medium} target="_blank">
                            <Medium className={classes.socialIcons}/>
                        </a> : null}
                        {about?.person?.github ? <a href={'//'+about?.person?.github} target="_blank">
                            <Github className={classes.socialIcons}/>
                        </a> : null}
                    </div>
                </div>
            </div>
            <div className={classes.aboutUs}>{constructEditorsData(about.about)}</div>

        </Container>
    )
};

About.propTypes = {};

export default About;