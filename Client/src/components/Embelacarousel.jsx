import React, {useCallback, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';






export function EmblaCarousel(props) {
    const autoplayOptions = {
        delay: 3000, 
        rootNode: emblaRoot => emblaRoot.parentElement
    }
    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay(autoplayOptions)]);

    return <>
        <div className="embla bg-red-200 " ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <img src={props.img} className='w-full'/>
                    <Link className='absolute top-[26rem] left-[5.5rem] text-white text-xl font-inter flex items-center gap-2 group'>
                    <p className='hover:underline hover:decoration-1 hover:underline-offset-4'>Shop now</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 group-hover:translate-x-2 transition-all duration-200">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </Link>
                </div>
                <div className="embla__slide">
                    <img src={props.img} className='w-full'/>
                    
                </div>
                <div className="embla__slide">
                    <img src={props.img} className='w-full'/> 
                </div>
            </div>
        </div>
    </>
}
