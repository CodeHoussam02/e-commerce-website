import { Link } from 'react-router-dom'

const Login = _ => {
    return <>
        <section className="mt-[70px] px-[120px] h-[55rem]">
            <div className="w-full py-2 font-normal text-lg">
            <h1 className="text-gray-400">
                <Link to='/' className='hover:text-gray-600'>Home</Link>
                <span className="ml-3 mr-3">/</span>
                <span className="text-gray-900">Login</span>
            </h1>
            </div>
            <div className="h-[55rem] flex justify-center mt-10">
            <div className="w-[30vw] h-[60vh] bg-white divide-y-2 divide-dashed p-4 ring-1 ring-gray-200 rounded-lg">
            <div className="mb-3 mt-6 text-center relative">
                <h3 className="text-gray-400 tracking-tighter">Log in to</h3>
                <h1 className="text-xl font-bold tracking-wide mb-7">
                    ReduxCrud
                    <span className="font-semibold text-indigo-500">.</span>
                </h1>
                <button className="bg-black mb-10 flex items-center m-auto py-2.5 px-16 rounded-lg space-x-4">
                    <div>
                        <i className="fa-brands fa-google text-white text-md"></i>
                    </div>
                    <p className="text-white font-semibold text-md">Connect with google</p>
                </button>
                <p className="absolute left-[16rem] top-[9.4rem] w-10 h-10 text-md font-semibold text-gray-400 rounded-full bg-white">or</p>
            </div>
            <div>
                <form className="my-12">
                    <div className="ring-1 ring-gray-300 mb-4 w-[28rem] mx-auto relative p-1 rounded-md">
                        <i className="fa-regular fa-envelope text-gray-400 text-lg ml-3 mr-1"></i>
                        <input type="text" className="border-none w-[24rem] focus:ring-0 text-lg placeholder:font-semibold placeholder-gray-400" placeholder="Your email"/>
                    </div>
                    <div className="ring-1 ring-gray-300 mb-4 w-[28rem] mx-auto relative p-1 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4.5 h-6 stroke-gray-500 inline-block ml-2 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <input type="text" className="border-none w-[24rem] focus:ring-0 text-lg placeholder:font-semibold placeholder-gray-400" placeholder="Your password"/>
                    </div>
                </form>
                <div className="grid place-content-center mb-12">
                    <button className="w-[28rem] ring-1 ring-gray-400/50 py-2.5 bg-gray-100 font-semibold tracking-tighter rounded-md">Log in</button>
                </div>
                <div className="text-center">
                    <Link to="/forgotmail" className="font-semibold mb-2 cursor-pointer hover:underline">Forgot password?</Link>
                    <h2 className="font-semibold text-gray-400 cursor-pointer">Don't have an account? 
                        <Link to='/signup' className="ml-1 text-black hover:underline">Sign up</Link>
                    </h2>
                </div>
            </div>
        </div>
    </div>
    </section>
    </>
}

export default Login;