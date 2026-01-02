'use client'

import React from 'react';

import TextAppear from '@/components/animation/TextAppear';

import { InView } from 'react-intersection-observer'

export default function AnimateText(props){

    const renderText = () => {

        let delay = 0;

        if(props.delay){

            delay = props.delay;
        }

        let text = props.text

        if(text && text.length > 0){

            let effect = 'spring';

            if(props.effect && (props.effect === 'fade' || props.effect === 'spring')){

                effect = props.effect;
            }

            let initial_position = props.initial_position || 80;
            let incr = props.incr || 40;
            
            if(effect === 'fade'){

                initial_position = props.initial_position || 30;
                incr = props.incr || 20
            }

            if(props.line && props.line === true){

                return <TextAppear incr={initial_position} delay={delay}>{text}</TextAppear>
            }else{

                text = text.split('');

                return text.map((_t, index) => {

                    incr = initial_position + incr;

                    if(_t == ' '){

                        return <span key={`text_${index}`}>&nbsp;</span>
                    }else{
                    
                        return (
                            <TextAppear key={`text_${index}`} incr={incr} delay={delay}>{_t}</TextAppear>
                        )
                    }
                })
            }
        }
    }
        
    return (
        <span className='flex'>
            {renderText()}
        </span>
    )
}
