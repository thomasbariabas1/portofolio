import React, {useEffect, useState} from 'react';
import EditorJs from "react-editor-js";

import {EDITOR_JS_TOOLS} from "./tools";

const EditorComponent = ({className, data, onChange, placeholder}) => {
    return (
        <EditorJs
            className={className}
            tools={EDITOR_JS_TOOLS}
            data={data}
            onChange={onChange}
            placeholder={placeholder}
        />
    );

}

export default EditorComponent