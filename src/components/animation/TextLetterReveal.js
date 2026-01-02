import React, { useState, useEffect } from 'react';

import { InView } from 'react-intersection-observer'

const TextLetterReveal = ( props ) => {
    
    const [visibleLetters, setVisibleLetters] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(() => {
    
        if(props.hasOwnProperty('auto')){

            if(show){

                for(let l = 0; l < props.text.length; l++){

                    window.setTimeout(() => {

                        setVisibleLetters((prev) => {
                
                            // Increment the visible letters on each scroll
                            
                            if(prev < props.text.length){
                            
                                return prev + (props.speed ? props.speed : 1);
                            }
                            
                            return prev;
                        });
                    }, (props.speed ? props.speed * 25 : 25) * l)
                }
            }
        }else{
            const handleScroll = (event) => {
        
                //   event.preventDefault(); // Prevent default scroll behavior
                
                if(show){
                
                    setVisibleLetters((prev) => {
                
                        // Increment the visible letters on each scroll
                        
                        if(prev < props.text.length){
                        
                            return prev + (props.speed ? props.speed : 1);
                        }
                        
                        return prev;
                    });
                }
            };

            // Add the wheel event listener
            window.addEventListener('wheel', handleScroll, { passive: false });

            // Cleanup the event listener
            return () => {
        
                window.removeEventListener('wheel', handleScroll);
            };
        }
    }, [props.text, show]);

    return (
    
        <InView tag="div" className={props.className ? props.className : 'text-gray-500'} onChange={(viewed) => {
            if(viewed){

                setShow(true)
            }
        }}>
            {props.text.split('').map((char, index) => (
                
                <span
                    key={index}
                    className={`transition opacity-0 ${index < visibleLetters ? 'opacity-100' : ''}`}
                >
                    {char}
                </span>
            ))}
        </InView>
    );
};

export default TextLetterReveal;