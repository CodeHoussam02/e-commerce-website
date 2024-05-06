import Lottie from "lottie-react";
import Password from '../assets/animations/Password.json'
import { Link } from 'react-router-dom'


const Passwordpage = _ => {
    return <section className="h-screen grid place-content-center">
            <div className="bg-white w-[50vw] h-[42vh] shadow-sm ring-1 ring-black/10 rounded-md flex items-center overflow-hidden p-7">
            <div className="flex flex-col" >
                <h2 className='text-3xl font-inter font-medium w-[650px] tracking-tight leading-normal'>You are too close, Set up your new password here to open an new world of the best offers that you shuld not miss.</h2>
                <div className="mt-5">
                    <input type="password" placeholder='Your password' className='mr-7 w-[400px] indent-1 border-none ring-1 ring-gray-500/20 rounded-lg text-lg font-inter placeholder:text-gray-400 placeholder:font-inter focus:ring-gray-500/40'
                    autoComplete='true'/>
                    <input type="password" placeholder='Your password' className='mt-4 mr-7 w-[400px] indent-1 border-none ring-1 ring-gray-500/20 rounded-lg text-lg font-inter placeholder:text-gray-400 placeholder:font-inter focus:ring-gray-500/40'
                    autoComplete='true'/>
                    <div className="mt-8 space-x-5">
                        <Link to='/' className="bg-[#273dd6] py-[9.5px] px-8 text-white font-inter rounded-md tracking-normal font-semibold">next</Link>
                        <Link to='/forgotmail' className='py-[9.5px] px-8 text-[#273dd6] font-inter rounded-md tracking-normal font-semibold'>Back</Link>
                    </div>
                </div>
            </div>
            <Lottie 
                animationData={Password}
                style={{width: '400px'}}
            />
        </div>
    </section>
}

export default Passwordpage;