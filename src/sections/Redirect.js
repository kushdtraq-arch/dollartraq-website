'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

export default function Redirect(props){

    const router = useRouter()

    useEffect(() => {
        
        if(props.redirect && props.redirect === true){
        
            router.push(props.path)
        }
    }, [props.redirect]);
    
    return null
}