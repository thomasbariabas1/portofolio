import React from 'react';
import PropTypes from 'prop-types';
import {postCardDateFormat} from "../util/dateUtils";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "../hooks/translation";

const useStyles = makeStyles({
    authorContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '16px'
    },
    authorImg: {
        width: '48px',
        height: '48px',
        borderRadius: '50%'
    },
    authorDetails: {
        marginLeft: '4px'
    },
})
const Author = ({firstName, lastName, creationDate, profileImg}) => {
    const classes = useStyles()
    const {lang, t} = useTranslation()

    return (
        <div className={classes.authorContainer}>
            <img src={"data:image/jpeg;base64," +profileImg} className={classes.authorImg}/>
            <div className={classes.authorDetails}>
                {t(firstName) + " " + t(lastName)}
                <div>{postCardDateFormat(creationDate, lang, t)}</div>
            </div>
        </div>
    );
};

Author.propTypes = {

};

export default Author;