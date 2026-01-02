'use client'

import { useTransition, animated } from '@react-spring/web'

export default function TextAppear(props){

    const transitions = useTransition([props.children], {
        native: true,
        from: { opacity: 0, transform: `translate3d(0, ${props.incr}px, 0)` },
        // enter: { opacity: 1, transform: `translate3d(0, 0px, 0)` },
        enter: item => async (next, cancel) => {
            await new Promise(resolve => setTimeout(resolve, props.delay));
            await next({ opacity: 1, transform: `translate3d(0, 0px, 0)` })
        },
        leave: { opacity: 1, transform: `translate3d(0, ${props.incr}px, 0)` },
    })
    
    return transitions((style, item) => (
        <animated.span style={style} className="m-word-break">{props.children}</animated.span>
    ))   
}