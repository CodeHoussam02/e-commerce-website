import { Link } from 'react-router-dom'
import Laptop from '../../assets/Gaming Lap.png'

const Carouselsec = _ => {
    return <section className='mt-[30px] px-[120px] h-[40rem] mb-20'>
        <div className='bg-black w-full h-[600px] flex justify-between items-center text-white px-[7rem]'>
            <div className='space-y-11'>
                <h2 className='text-[#BFF200] text-xl font-semibold font-poppins'>categories</h2>
                <h2 className='font-semibold leading-tight text-7xl font-inter'>
                    Enhance Your <br /> Gaming Experience
                </h2>
                <Link className='inline-block w-[171px] h-[56px] text-lg bg-[#BFF200] grid place-content-center rounded-md text-black font-medium'>BUY NOW!</Link>
            </div>
            <img src={Laptop} alt="laptop"  className='w-[36.5rem]'/>
        </div>
    </section>
}

export default Carouselsec;