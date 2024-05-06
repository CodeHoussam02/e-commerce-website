import { Link, Outlet } from 'react-router-dom'

const Wrapper = _ => {
    return <section className="mt-[70px] px-[120px] h-[55rem]">
        <div className="w-full py-2 font-normal text-lg">
            <h1 className="text-gray-400">
                <Link to='/' className='hover:text-gray-600'>Home</Link>
                <span className="ml-3 mr-3">/</span>
                <span className="text-gray-900">Login</span>
            </h1>
        </div>
        <div className='flex justify-center'>
            <Outlet />
        </div>
    </section>
}

export default Wrapper;