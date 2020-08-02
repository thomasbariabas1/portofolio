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
            setData({active: about.active, about:{time: 1556098174501, blocks: about.about,  version: "2.18.0"}})
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
            <TextField label={'Facebook'} value={data.facebook}/>
            <TextField label={'Twitter'} value={data.twitter}/>
            <TextField label={'Medium'} value={data.medium}/>
            <TextField label={'Github'} value={data.github}/>
            <div className={classes.editor}>
                {data ?<EditorComponent placeholder={'Click to start typing'} data={data.about} className={classes.editor} onChange={onChangeAbout}/>: null}
            </div>
            <Button onClick={onSave}>Save</Button>
        </Paper>
    );
};

AdminAboutEdit.propTypes = {
    
};

export default AdminAboutEdit;