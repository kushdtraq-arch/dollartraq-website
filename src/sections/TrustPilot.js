'use client' // Required for useEffect
import { useEffect, useRef } from 'react'

export default function TrustPilot(){
  	const ref = useRef(null)

  	useEffect(() => {
    
		if(window.Trustpilot){
      		window.Trustpilot.loadFromElement(ref.current, true)
    	}
  	}, [])

  	return (
    	<div
      		ref={ref}
      		className="trustpilot-widget"
      		data-locale="en-US"
      		data-template-id="56278e9abfbbba0bdcd568bc"
      		data-businessunit-id="69bd0e57bc89df813e3cffb6"
      		data-style-height="52px"
      		data-style-width="100%"
      		data-token="ec67b806-1aa6-47f8-914e-0ed24f98a220"
    	>
      		<a href="https://www.trustpilot.com/review/dollartraq.com" target="_blank" rel="noopener noreferrer">
        		Trustpilot
      		</a>
    	</div>
  	)
}