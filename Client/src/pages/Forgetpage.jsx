import { Link } from 'react-router-dom'
import pattern from '../assets/pattern.png'
import email from '../assets/animations/Email.json'
import Lottie from 'lottie-react'

const Forgetpage = _ => {
    return <section className="h-screen grid place-content-center">
        <div className="bg-white w-[50vw] h-[30vh] shadow-sm ring-1 ring-black/10 rounded-md flex overflow-hidden p-7">
            <div className="flex flex-col" >
                <h2 className='text-3xl font-inter font-medium w-[650px] tracking-tight leading-normal'>Sorry to here that, Set up your account again and join our club and get the best offers on your first purchase.</h2>
                <div>
                <input type="text" placeholder='Email address' className='mt-[3.5rem] mr-7 w-[400px] indent-1 border-none ring-1 ring-gray-500/20 rounded-lg text-lg font-inter placeholder:text-gray-400 placeholder:font-inter focus:ring-gray-500/40'
                autoComplete='true'/>
                <Link to='/newpassword' className='bg-[#273dd6] py-[9.5px] px-8 text-white font-inter rounded-md tracking-normal font-semibold'>Next</Link>
                </div>
            </div>
            <Lottie 
                animationData={email}
                style={{width: '400px'}}
            />
        </div>
    </section>
}

export default Forgetpage