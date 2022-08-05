import { useAnimatedScale, useDimension } from "./hooks";
import React from "react";

const withContext = (MainComponent : React.FC<any>) : React.FC<any> => {
    return (props : any) => {
        const {scale, start : onClick} = useAnimatedScale()
        const {w, h} = useDimension()
        const mainProps = {
            scale, 
            w, 
            h, 
            onClick
        }
        const newProps = {...props, ...mainProps}
        return (
            <MainComponent {...newProps}></MainComponent>
        )
    }
}

export default withContext 