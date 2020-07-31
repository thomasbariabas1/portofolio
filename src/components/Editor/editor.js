import React, {useEffect, useState} from 'react';
import EditorJs from "react-editor-js";

import {EDITOR_JS_TOOLS} from "./tools";

const EditorComponent = ({className, data, onChange}) => {
    console.log('editordata', data)
    return (
        <EditorJs
            className={className}
            tools={EDITOR_JS_TOOLS}
            data={data}
            onChange={onChange}
            placeholder={'Click to start writing your post.'}
        />
    );

}

export default EditorComponent