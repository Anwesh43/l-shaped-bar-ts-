import {useState, useEffect, CSSProperties} from 'react'

const scGap : number = 0.01 
const delay : number = 20 

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
                
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {

        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const position = 'absolute'
    const left = `${w / 2}px`
    const top = `${h / 2}px`
    const background = 'indigo'
    const size : number = Math.min(w, h) / 10
    const sf : number = Math.sin(scale * Math.PI)
    return {
        parentStyle(i : number) : CSSProperties {
            return {
                position,
                left, 
                top,
                transform: `rotate(${90 * i}deg)`
            }
        },
        blockStyle() : CSSProperties {
            return {
                position,
                left : `${-size / 2}px`,
                top: `${-size / 2}px`,
                width : `${size + 2 * size * sf}px`,
                height: `${size}px`,
                background,
                
            }
        }
    }
}
