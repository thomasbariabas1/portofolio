import React from 'react'
import {dataTypes} from "./Enums";

export const typeStyles = {
    quote: {
        fontStyle: 'italic'
    },
    code: {
        backgroundColor: '#8080802e',
        padding: '8px',
        overflow: 'auto'
    }
}
export const constructPost = (body = [], classes) =>{

    return body.map(data=>{
        return determineElement(data.type, data.data, classes)
    })
}

const determineElement = (type, data, classes) => {
    switch (type) {
        case dataTypes.quote:
            return <span><q  className={classes.quote}>{data.text}</q>-<span>{data.caption}</span></span>
        case dataTypes.code:
            return <code ><pre className={classes.code}>{data.code}</pre></code>
        case dataTypes.paragraph:
            const d = data.text.split(/<b>(.*?)<\/b>/)

            return <p>{d.map((text, i)=>{
                if(!(i%2 ===0)) {
                    return <b>{text}</b>
                }
                return text
            })}</p>
    }
}