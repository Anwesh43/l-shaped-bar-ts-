import React from "react";
import {useStyle} from './hooks'
import withContext from "./withContext";

interface LSBProps {
    w : number, 
    h : number, 
    onClick : () => void,
    scale : number
}

const LShapedBar = (props : LSBProps) => {
    const {parentStyle, blockStyle} = useStyle(props.w, props.h, props.scale)
    return (<div style = {parentStyle()} onClick = {() => props.onClick()}>
        {[0, 1].map(i => (<div key = {`block_${i}`} style = {blockStyle(i)}></div>))}
    </div>)
}

export default withContext(LShapedBar)

