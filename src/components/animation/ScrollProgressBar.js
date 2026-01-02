
import React, { useState, useEffect } from 'react';

const ScrollProgressBar = ( { parentRef, className } ) => {
    
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            const divElement = parentRef.current;
          
            if(divElement){
            
                const { top, height } = divElement.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const visibleTop = Math.max(0, windowHeight - top);
                const visibleHeight = Math.min(height, visibleTop);
                const progress = Math.max(0, Math.min(1, visibleHeight / height));
                setProgress(progress * 100);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        
        <div
            className={`${className ? className : 'h-2 bg-blue-600 rounded-full'}`}
            style={{
                width: `${progress}%`,
                zIndex: 1000,
            }}
        />
    );
};

export default ScrollProgressBar;