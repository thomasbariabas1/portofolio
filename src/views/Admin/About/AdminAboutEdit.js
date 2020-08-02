import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory, useParams} from "react-router-dom";
import API from "../../../api/API";
import EditorComponent from "../../../components/Editor/editor";
import Paper from "../../../components/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Switch} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
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
const AdminAboutEdit = props => {
    const [data, setData] = useState(null)
    const {id} = useParams()
    const history = useHistory()

    const classes = useStyles()
    useEffect(()=>{
        API.GetAbout(id).then((about)=>{
            setData({...about ,active: about.active, about:{time: 1556098174501, blocks: about.about,  version: "2.18.0"}})
        })
    }, [])
    const onChange = ({target: {checked}}) => {
        setData(previousState=>({...previousState, active:checked}))
    }
    const onChangeAbout = (api, newData) => {
        setData(previousState=>({...previousState, about: newData}))
    }

    const onSave = () => {
        const request = {
            ...data,
            active: data.active,
            about: data.about.blocks
        }
        API.SaveAbout(request).then(()=>{
            history.push('/admin/about')
        })
    }
    if(!data) {
        return null
    }
    return (
        <Paper elevation={3} className={classes.aboutContainer}>
          <FormGroup>
                <FormControlLabel
                    control={<Switch className={classes.switch} checked={data.active} size="large" onChange={onChange} />}
                    labelPlacement={"start"}
                    label="Active"/>
            </FormGroup>
            <div className={classes.editor}>
                <EditorComponent placeholder={'Click to start typing'} data={data.about} className={classes.editor} onChange={onChangeAbout}/>
            </div>
            <Button onClick={onSave}>Save</Button>
        </Paper>
    );
};

AdminAboutEdit.propTypes = {
    
};

export default AdminAboutEdit;