import React, {useState} from 'react';
import PropTypes from 'prop-types';
import EditorComponent from "../../../components/Editor/editor";
import TextField from "@material-ui/core/TextField";
import {useTranslation} from "../../../hooks/translation";
import Paper from "../../../components/Paper";
import {makeStyles} from "@material-ui/core/styles";
import API from "../../../api/API";
import {useHistory} from "react-router-dom";
import Button from "../../../components/buttons/Button";

const useStyles = makeStyles({
    container: {
        padding: '16px'
    },
    editor: {
        marginTop: '16px',
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    field: {
        marginTop: '16px'
    },
    coverImgPreview: {
        width: '100%',
        maxHeight: '300px'
    }
})

const AdminPostCreation = props => {
    const [post, setPost] = useState([])
    const [values, setValues] = useState({title: '', coverText: '', coverImg: null, coverImgData: null})
    const {t} = useTranslation()
    const classes = useStyles()
    const history = useHistory()

    const onChangePost = (api, newData) => {
        setPost(newData)
    }
    const onChangeFields = ({target: {name, value}}) => {
        setValues(prevState => ({...prevState, [name]:value}))
    }

    const onChangeCoverImg = ({target: {name, value, files}}) =>{
        if(files && files[0]) {
            const reader = new FileReader()
            reader.addEventListener('load', (event) => {
                const result = event.target.result;
                setValues(prevState => ({...prevState, coverImg: value, coverImgData: result}))
            });
            reader.readAsDataURL(files[0]);

        }
    }
    const onSave = () => {
        const data = {
            title: values.title,
            coverText: values.coverText,
            coverImg: values.coverImgData,
            body: post.blocks
        }
        API.SavePost(data).then(()=>{
            history.push('/admin/posts')
        })
    }
    return (
        <Paper elevation={3} className={classes.container}>
            <div>
            <TextField className={classes.field}
                       name={'title'}
                       value={values.title}
                       label={t('title')}
                       onChange={onChangeFields}
                       fullWidth/>
            <TextField className={classes.field} 
                       label={t('coverText')}
                       name={'coverText'}
                       value={values.coverText}
                       onChange={onChangeFields}
                       multiline 
                       fullWidth/>
            <TextField type={'file'}
                       name={'coverImg'}
                       inputProps={{
                           accept:"image/jpeg,image/png"
                       }}
                       value={values.coverImg}
                       className={classes.field}
                       onChange={onChangeCoverImg}
                       label={t('coverImg')} 
                       fullWidth/>
                {values.coverImgData &&<img className={classes.coverImgPreview} src={values.coverImgData} alt={'cover'}/>}
            </div>

            <div className={classes.editor}>
                <EditorComponent className={classes.editor} data={post} onChange={onChangePost}/>
            </div>
            <Button onClick={onSave}>Save</Button>
        </Paper>
    );
};

AdminPostCreation.propTypes = {

};

export default AdminPostCreation;