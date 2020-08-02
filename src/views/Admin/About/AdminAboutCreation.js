import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import API from "../../../api/API";
import Paper from "../../../components/Paper";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Button, Switch} from "@material-ui/core";
import EditorComponent from "../../../components/Editor/editor";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
const useStyles = makeStyles({
    aboutContainer: {
        padding:'8px'
    },
    editor:{
        backgroundColor:'#f5f5f0'
    },
    switch: {

    }
})
const AdminAboutCreation = props => {
    const [data, setData] = useState({active: false, about:{time: 1556098174501, blocks: [],  version: "2.18.0"}})
    const classes = useStyles()
    const history = useHistory()

    const onChange = ({target: {checked}}) => {
        setData(previousState=>({...previousState, active:checked}))
    }

    const onChangeAbout = (api, newData) => {
        setData(previousState=>({...previousState, about: newData}))
    }

    const onSave = () => {
        const request = {
            active: data.active,
            about: data.about.blocks
        }
        API.SaveAbout(request).then(()=>{
            history.push('/admin/about')
        })
    }
    return (
        <Paper elevation={3} className={classes.aboutContainer}>
            {data?<FormGroup>
                <FormControlLabel
                    control={<Switch className={classes.switch} checked={data.active} size="large" onChange={onChange} />}
                    labelPlacement={"start"}
                    label="Active"/>
            </FormGroup> :null}
            <div className={classes.editor}>
                {data ?<EditorComponent placeholder={'Click to start typing'} data={data.about} className={classes.editor} onChange={onChangeAbout}/>: null}
            </div>
            <Button onClick={onSave}>Save</Button>
        </Paper>
    );
};

AdminAboutCreation.propTypes = {
    
};

export default AdminAboutCreation;