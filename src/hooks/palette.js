import React, {useEffect, useState} from 'react';
import * as Vibrant from 'node-vibrant'

export const usePalette =  (imgSrc) => {
    const [color, setColor] = useState([])
    useEffect(()=>{
        Vibrant.from(imgSrc).getPalette((err, palette) => {

            setColor(palette.LightVibrant.getRgb())
        })
    }, [imgSrc])

    return color
}

export default {usePalette};