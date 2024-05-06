import { Link } from 'react-router-dom'
import phone from '../assets/icons-phone.png'
import email from '../assets/icons-mail.png'


const Contact = _ => {
    return <section className="px-[120px] h-[55rem] mb-[20px] mt-[70px]">
        <div className="w-full py-2 font-normal text-lg">
            <h1 className="text-gray-400">
                <Link to='/' className='hover:text-gray-600'>Home</Link>
                <span className="ml-3 mr-3">/</span>
                <span className="text-gray-900">Contact Us</span>
            </h1>
        </div>
        <div className='px-[35px] mt-[63px] flex gap-[30px]'>
            <div className='p-[35px]'>
                <div className='mb-10 space-y-5'>
                    <div className='flex items-center gap-5'>
                        <img src={phone} alt="" />
                        <h1 className='font-poppins font-medium cursor-pointer'>Call To Us</h1>
                    </div>
                    <p className='w-[290px] font-inter font-normal tracking-wide leading-[2.5rem]'>We are available 24/7 days a week Phone +599123233</p>
                </div>
                <hr/>
                <div className='mt-10 space-y-5'>
                    <div className='flex items-center gap-5'>
                        <img src={email} alt="" />
                        <h1 className='font-poppins font-medium cursor-pointer'>Write To Us</h1>
                    </div>
                    <p className='w-[340px] font-inter font-normal tracking-wide leading-[2.5rem]'>Fill out our form and we will contact you within 24 hours.</p>
                    <p className='font-inter font-normal tracking-wide'>Emails: customer@exclusive.com</p>
                    <p className='font-inter font-normal tracking-wide'>Emails: customer@exclusive.com</p>
                </div>
            </div>
            {/* Form Section */}
            <div className='p-[35px]'>
                <form className=''>
                    <div className='flex gap-[40px]'>
                        <input type="text" className='w-[335px] h-[60px] border-none ring-2 ring-gray-200 rounded-md placeholder:text-lg placeholder:font-poppins placeholder:text-gray-300 placeholder:font-medium font-normal text-lg indent-2 focus:ring-gray-400' placeholder='Your Name'/>
                        <input type="text" className='w-[335px] h-[60px] border-none ring-2 ring-gray-200 rounded-md placeholder:text-lg placeholder:font-poppins placeholder:text-gray-300 placeholder:font-medium font-normal text-lg indent-2 focus:ring-gray-400' placeholder='Your Email'/>
                        <input type="text" className='w-[335px] h-[60px] border-none ring-2 ring-gray-200 rounded-md placeholder:text-lg placeholder:font-poppins placeholder:text-gray-300 placeholder:font-medium font-normal text-lg indent-2 focus:ring-gray-400' placeholder='Your Phone'/>
                    </div>
                    <div>
                        <textarea className='w-full h-[14.5rem] mt-[40px] border-none ring-2 ring-gray-200 rounded-md placeholder:text-lg placeholder:font-poppins placeholder:text-gray-300 placeholder:font-medium font-normal text-lg indent-2 pt-3 focus:ring-gray-400' placeholder='Your Message Here'></textarea>
                    </div>
                    <div className='mt-[40px] flex justify-end'>
                        <button className='bg-[#bff200] w-[215px] h-[60px] font-poppins font-medium rounded-md'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
}

export default Contact;