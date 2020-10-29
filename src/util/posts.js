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
export const constructEditorsData = (body = []) =>{

    return body.map((data, index)=>{
        return determineElement(data.type, data.data, index)
    })
}

const determineElement = (type, data, index) => {
    switch (type) {
        case dataTypes.quote:
            return <span key={'quote'+index}><q  style={typeStyles.quote}>{data.text}</q>-<span>{data.caption}</span></span>
        case dataTypes.code:
            return <code key={'code' + index}><pre style={typeStyles.code}>{data.code}</pre></code>
        case dataTypes.raw:
        case dataTypes.paragraph:
            const text = (data && data.text) ? data.text.replace(/&nbsp;/g, " ") :''
            return <p key={'paragraph' + index} dangerouslySetInnerHTML={{__html:text}}/>
        case dataTypes.table:
            const tableContent = data ? data.content : []

            return <div key={'table' + index} className={'tc-table__wrap'}>
                <table className={'tc-table'}>
                    <tbody>{tableContent.map((row, index)=>{
                    return  <tr key={index}>{row.map(text=>{
                        return <td className={'tc-table__cell'}>
                            <div className={'tc-table__area'}>
                            <div className={'tc-table__inp'}>
                                {text}
                            </div>
                            </div>
                        </td>
                    })}</tr>
                    })}
                    </tbody>
                </table>
            </div>
        case dataTypes.list:
            const style = data && data.style
            const ListElement = style==='unordered' ? 'ul' : 'ol'
            const items = data && data.items
            return <ListElement key={'list' + index} className={`cdx-block cdx-list cdx-list--${style==='unordered'?'unordered': 'ordered'}`}>{items.map(text=><li className={'cdx-list__item'}>{text}</li>)}</ListElement>
        case dataTypes.header:
            const level = data && data.level
            const Element = `h${level}`
            const headerText = data && data.text
            return <Element key={'header' + index}  dangerouslySetInnerHTML={{__html:headerText}}/>
    }
}