import truck from '../../assets/truck.png'
import service from '../../assets/service.png'
import guarantee from '../../assets/guarantee.png'


const Whyus = _ => {
    return <section className='mt-[20px] px-[120px] h-[25rem] mb-[20px]'>
        <div className='grid grid-cols-3 px-[116px]'>
            <div className='col-span-1 h-[261px] grid place-content-center space-y-6'>
                <img src={truck} className='mx-auto cursor-pointer'/>
                <div className='space-y-3'>
                    <h2 className='text-xl text-center font-bold'>FREE AND FAST DELIVERY</h2>
                    <p className='text-lg font-medium text-gray-600'>Free delivery for all orders over $140</p>
                </div>
            </div>
            <div className='col-span-1 h-[261px] grid place-content-center space-y-6'>
                <img src={service} className='mx-auto cursor-pointer'/>
                <div className='space-y-3'>
                    <h2 className='text-xl text-center font-bold'>FREE AND FAST DELIVERY</h2>
                    <p className='text-lg font-medium text-gray-600'>Free delivery for all orders over $140</p>
                </div>
            </div>
            <div className='col-span-1 h-[261px] grid place-content-center space-y-6'>
                <img src={guarantee} className='mx-auto cursor-pointer'/>
                <div className='space-y-3'>
                    <h2 className='text-xl text-center font-bold'>FREE AND FAST DELIVERY</h2>
                    <p className='text-lg font-medium text-gray-600'>Free delivery for all orders over $140</p>
                </div>
            </div>
        </div>
    </section>
}

export default Whyus;