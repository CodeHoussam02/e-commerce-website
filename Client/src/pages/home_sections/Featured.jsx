import { Link } from 'react-router-dom'
import ps5 from '../../assets/ps5-slim.png'
import women from '../../assets/attractive-woman.png'
import speakers from '../../assets/speakers.png'
import parfume from '../../assets/parfume.png'


const Featured = _ => {
    return <section className='mt-[70px] px-[120px] h-[57rem] mb-[20px]'>
        <div className='flex items-center gap-[30px]'>
            <span className='block w-[30px] h-[3.5rem] rounded-md bg-[#1B2C1C]'></span>
            <p className='text-2xl font-semibold tracking-tight text-gray-800 '>Featured</p>
        </div>
        <h2 className='mt-[40px] text-5xl font-semibold font-inter mb-[60px]'>New Arrivals</h2>
        <div className='grid grid-cols-2 gap-[30px]'>
            <div className='bg-black col-span-1 h-[600px] pt-6 flex justify-center relative'>
                <img src={ps5} alt="ps5" className=''/>
                <div className='absolute left-6 bottom-6 text-white space-y-[16px]'>
                    <h2 className='text-4xl font-semibold '>Playsation 5</h2>
                    <p className='text-lg w-[280px] font-light'>Black and White version of the PS5 coming out on sale.</p>
                    <Link className='inline-block text-xl font-normal decoration-1 underline underline-offset-4 hover:no-underline'>Shop now</Link>
                </div>
            </div>
            <div className="h-[600px] col-span-1 grid grid-rows-2 gap-[30px]">
                <div className='bg-[#0D0D0D] h-[284px] row-span-1 flex justify-end relative'>
                    <img src={women} alt="women" className='-translate-x-8'/>
                    <div className='absolute left-6 bottom-6 text-white space-y-[16px]'>
                        <h2 className='text-4xl font-semibold '>Women’s Collections</h2>
                        <p className='text-lg w-[280px] font-light'>Featured woman collections that give you another vibe.</p>
                        <Link className='inline-block text-xl font-normal decoration-1 underline underline-offset-4 hover:no-underline'>Shop now</Link>
                    </div>
                </div>
                <div className='row-span-1 grid grid-cols-2 gap-[30px]'>
                    <div className='col-span-1 h-[284px] bg-[#0D0D0D] flex justify-center relative py-5'>
                        <span className='w-[20rem] h-[20rem] bg-gray-600 absolute rounded-full blur-md opacity-5'></span>
                        <img src={speakers} alt="" />
                        <div className='absolute left-6 bottom-6 text-white space-y-[16px]'>
                            <h2 className='text-4xl font-semibold '>Speakers</h2>
                            <p className='text-lg w-[280px] font-light'>Amazon wireless speakers.</p>
                            <Link className='inline-block text-xl font-normal decoration-1 underline underline-offset-4 hover:no-underline'>Shop now</Link>
                        </div>
                    </div>
                    <div className='col-span-1 h-[284px] bg-[#0D0D0D] flex justify-center py-5 overflow-hidden relative'>
                        <span className='w-[20rem] h-[20rem] bg-gray-600 absolute rounded-full blur-md opacity-5'></span>
                        <img src={parfume} alt="" className='z-10'/>
                        <div className='absolute left-6 bottom-6 text-white space-y-[16px] z-10'>
                            <h2 className='text-4xl font-semibold '>Speakers</h2>
                            <p className='text-lg w-[280px] font-light'>Amazon wireless speakers.</p>
                            <Link className='inline-block text-xl font-normal decoration-1 underline underline-offset-4 hover:no-underline'>Shop now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Featured;