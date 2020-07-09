import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "../../hooks/translation";
import Paper from "../../components/Paper";
import {usePostTransition} from "../../hooks/postTransition";
import {tileData} from "../Home/components/PostList";
import {useHistory, useParams, useLocation} from "react-router-dom";
import {Fade, Slug} from "../Home/components/Primitives";
import Container from "@material-ui/core/Container";

const Posts = props => {

    return <Container>
        <Paper elevation={3}>
        Posts
        </Paper>
    </Container>
};

Posts.propTypes = {};

export default Posts;