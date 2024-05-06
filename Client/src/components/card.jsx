import { useState } from 'react'
import Bag from '../assets/gucci-bag.png'

export default function Card({reviews, img, title, price, old, alert, alertMsg}) {
    const [stars, setStars] = useState()
    return <>
        <div className="min-w-[270px] max-h-[370px] rounded-md overflow-hidden cursor-pointer group">
            <div className='bg-[#f5f5f5] min-h-[250px] grid place-content-center relative overflow-hidden '>
                {
                    !alert ?
                        <span className='absolute left-4 top-4 bg-[#00ff66] py-1 px-2 rounded-lg text-white'>new</span>
                    : 
                        <span className='absolute left-5 top-3 bg-[#db4444] py-1 px-2 rounded-lg text-white'> -{alertMsg}%</span> 
                }
                <img src={img} className='max-h-[14rem]'/>
                {/* Interactions */}
                <span className='absolute right-3 top-3 rounded-full bg-white p-1.5 translate-x-16 transition-transform duration-200 group-hover:translate-x-0 group'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 group-active:stroke-red-500 group-active:fill-red-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </span>
                <span className='absolute right-3 top-14 rounded-full bg-white p-1.5 translate-x-16 transition-transform duration-300 group-hover:translate-x-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                </span>
                <span className='absolute bottom-0 translate-y-10 bg-black w-full py-2 text-center font-medium tracking-wide text-white group-hover:translate-y-0 transition-transform duration-300'>Add to cart</span>
            </div>
            <h2 className='mt-3 text-lg font-medium tracking-wide'>
                {title}
            </h2>
            <p className='font-medium my-2 flex items-center'>
                <span className='text-[#db4444] mr-3'>${price}</span>
                {
                    old && <span className='text-sm text-gray-400 line-through'>${old}</span>
                }
            </p>
            <div className='flex'>
                <div>
                    <i className="fa-solid fa-star text-[#ffd43b]"></i>
                    <i className="fa-solid fa-star text-[#ffd43b]"></i>
                    <i className="fa-solid fa-star text-[#ffd43b]"></i>
                    <i className="fa-solid fa-star text-[#ffd43b]"></i>
                    <i className="fa-solid fa-star text-[#ffd43b]"></i>
                </div>
                <span className='font-medium text-gray-400 ml-2'>(29)</span>
            </div>
        </div>
    </>
}