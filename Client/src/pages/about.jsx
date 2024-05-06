import { Link } from 'react-router-dom'
import Whyus from '../pages/home_sections/Whyus'
import Partners from '../components/Partners';
import story from '../assets/story.png'
import seller from '../assets/seller.svg'
import bag from '../assets/bag.svg'
import services from '../assets/services.png'
import customer from '../assets/customer.png'

const About = _ => {
    return <section className="px-[120px] h-[155rem] mb-[20px] mt-[70px]">
        <div className="w-full py-2 font-normal text-lg">
            <h1 className="text-gray-400">
                <Link to='/' className='hover:text-gray-600'>Home</Link>
                <span className="ml-3 mr-3">/</span>
                <span className="text-gray-900">About Us</span>
            </h1>
        </div>
        {/* Our Story */}
        <div className='mb-[102px]'>
            <div className='flex justify-between items-center gap-[85px] mt-[30px] mb-[102px]'>
            <div className='mt-[100px]'>
                <h2 className="text-[50px] font-semibold font-inter mb-6">Our Story</h2>
                <div className='w-[800px] text-xl font-inter font-normal tracking-wide leading-loose'>
                    <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <br />
                    <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
            </div>
                <img src={story} alt="" className='w-full'/>
            </div>
            <div className='flex justify-between'>
                <div className='w-[270px] h-[230px] ring-1 ring-gray-300 grid place-content-center space-y-3 rounded-md'>
                    <img src={seller} className='mx-auto' />
                    <div className='space-y-1'>
                        <h1 className='text-3xl font-semibold font-inter text-center'>10.5K</h1>
                        <p className='text-md font-inter font-normal'>Active sellers in our site</p>
                    </div>
                </div>
                <div className='w-[270px] h-[230px] ring-1 ring-gray-300 grid place-content-center space-y-3 rounded-md'>
                    <img src={bag} alt="" className='mx-auto'/>
                    <div className='space-y-1'>
                        <h1 className='text-3xl font-semibold font-inter text-center'>45.5k</h1>
                        <p className='text-md font-inter font-normal'>Customer active in our site</p>
                    </div>
                </div>
                <div className='w-[270px] h-[230px] ring-1 ring-gray-300 grid place-content-center space-y-3 rounded-md'>
                    <img src={services} alt="" className='mx-auto'/>
                    <div className='space-y-1'>
                        <h1 className='text-3xl font-semibold font-inter text-center'>25k</h1>
                        <p className='text-md font-inter font-normal'>Anual gross sale in our site</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Our Partners */}
        <Partners title={true} />
        {/* Cusomer Service */}
        <div className='mt-[102px] mb-[65px] flex gap-[75px] '>
            <img src={customer} alt="" className='w-full'/>
            <div>
                <h1 className="text-[50px] font-semibold font-inter mb-6">Customer <br />Service</h1>
                <p className='w-[700px] text-xl font-inter font-normal tracking-wider leading-loose'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            </div>
        </div>
        {/* Why us */}
        <Whyus />
    </section>
}


export default About;