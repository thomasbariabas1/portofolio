import React, { Component } from 'react';
import EditorJs from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./tools";

const EditorComponent = ({ className, data = [], onChange}) => {

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