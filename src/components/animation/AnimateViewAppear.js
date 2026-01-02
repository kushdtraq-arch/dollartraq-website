
import React, { useState } from 'react';

import { InView } from 'react-intersection-observer'

import { useSpring, animated } from '@react-spring/web'

export default function AnimateViewAppear(props){

    const [show, setShow] = useState(0);

    let translate_from = 50;

    if(props.translate){

        translate_from = props.translate
    }

    translate_from = `${translate_from}px`

    if(props.effect === 'fade'){

        translate_from = '0px'
    }

    const style = useSpring({
        delay: props.delay ? props.delay : 200,
        to: {opacity: show ? 1 : 0, transform: show ? `translate3d(0, 0px, 0)` : `translate3d(0, ${translate_from}, 0)`}
    })

    return (
        <InView tag="div" className={props.className ? props.className : ''} onChange={(viewed) => {

            if(viewed){

                setShow(true)
            }
        }}>
            <animated.div style={style}>{props.children}</animated.div>
        </InView>
    )
}
