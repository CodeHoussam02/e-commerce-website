import { Link } from 'react-router-dom'
import Monitor from '../assets/monitor.png'
import console from '../assets/console.png'


const Cart = _ => {
    return <section className="mt-[70px] px-[120px] min-h-[55rem]">
        <div className="w-full py-2 font-normal text-lg">
            <h1 className="text-gray-400">
                <Link to='/' className='hover:text-gray-600'>Home</Link>
                <span className="ml-3 mr-3">/</span>
                <span className="text-gray-900">Cart</span>
            </h1>
            </div>
            {/* This will be the cart table warpper */}
            <div className='mt-[70px] p-[40px] mx-auto'>
                <table className='w-full font-inter'>
                    <thead className='text-center px-[20px]'>
                        <tr>
                            <td className='text-lg font-poppins font-normal pb-[64px]'>Product</td>
                            <td className='text-lg font-poppins font-normal pb-[64px]'>Price</td>
                            <td className='text-lg font-poppins font-normal pb-[64px]'>Quantity</td>
                            <td className='text-lg font-poppins font-normal pb-[64px]'>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr className='text-gray-700'>
                            <td className='text-center pb-[64px]'>
                                <div className='flex justify-center items-center space-x-10'>
                                    <img src={Monitor} alt="monitor-image" className='w-[60px] h-[60px]'/>
                                    
                                </div>
                            </td>
                            <td className='text-center pb-[64px] text-lg'>$650</td>
                            <td className='text-center pb-[64px]'>
                                <div className='w-[80px] h-[50px] mx-auto ring-1 ring-black/40 rounded-md flex justify-center items-center space-x-4'>
                                    <p className='font-medium text-lg text-gray-500'>01</p>
                                    <div className=''>
                                        <i className="fa-solid fa-caret-up block cursor-pointer text-gray-400 hover:text-gray-800 transition-all duration-200"></i>
                                        <i className="fa-solid fa-sort-down block cursor-pointer text-gray-400 hover:text-gray-800 transition-all duration-200"></i>                
                                    </div>
                                </div>
                            </td>
                            <td className='text-center pb-[64px]'>$650</td>
                        </tr>
                        <tr className='text-gray-700'>
                            <td className='text-center pb-[64px]'>
                                <div className='flex justify-center items-center space-x-10'>
                                    <img src={console} alt="monitor-image" className='w-[60px] h-[60px]'/>
                                    
                                </div>
                            </td>
                            <td className='text-center pb-[64px] text-lg'>$650</td>
                            <td className='text-center pb-[64px]'>
                                <div className='w-[80px] h-[50px] mx-auto ring-1 ring-black/40 rounded-md flex justify-center items-center space-x-4'>
                                    <p className='font-medium text-lg text-gray-500'>02</p>
                                    <div className=''>
                                        <i className="fa-solid fa-caret-up block cursor-pointer text-gray-400 hover:text-gray-800 transition-all duration-200"></i>
                                        <i className="fa-solid fa-sort-down block cursor-pointer text-gray-400 hover:text-gray-800 transition-all duration-200"></i>                
                                    </div>
                                </div>
                            </td>
                            <td className='text-center pb-[64px]'>$1000</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className='text-end bg-red-200'>total</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
    </section>
}


export default Cart;