import React, { Fragment } from "react";
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
    return (
        <Fragment>
        {[0, 1].map((i : number) => (<div style = {parentStyle(i)} onClick = {() => props.onClick()}>
                <div key = {`block_${i}`} style = {blockStyle()}></div>
                </div>))}
        </Fragment>
    )
}

export default withContext(LShapedBar)

