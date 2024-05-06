import send from '../assets/send Vector.svg'
import Qrcode from '../assets/Qr Code.svg'
import Appstore from '../assets/download-appstore.svg'
import Googleplay from '../assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.svg'

const Footer = _ => {
    return <footer className="w-full h-[440px] bg-[#1B2C1C] relative bottom-0 px-[120px] py-[60px] grid grid-cols-5 gap-7 text-white">
        {/* Exclusive */}
        <div className="col-span-1 space-y-6">
            <h1 className='text-2xl font-semibold cursor-pointer'>Exclusive</h1>
            <h2 className='text-lg font-medium'>Subscribe</h2>
            <p className='tracking-wide'>Get <span className="hover:underline cursor-pointer tracking-wider">20% off</span> your first order.</p>
            <div className='w-[280px] border-2 border-[#FAFAFA] flex gap-1 py-1 rounded-md px-3'>
                <input type="text" placeholder="Enter your email" className='flex-1 bg-transparent outline-none placeholder:text-white/40 text-lg border-none focus:ring-0'/>
                <img src={send} alt="" className='cursor-pointer'/>
            </div>
        </div>
        {/* Support */}
        <div className='col-span-1 space-y-4'>
            <h1 className='text-2xl font-semibold cursor-pointer hover:underline-offset-2'>Support</h1>
            <p className='opacity-0'>Class</p>
            <h3 className='tracking-wider hover:underline cursor-pointer hover:underline-offset-2'>exclussive@gmail.com</h3>
            <h3 className='tracking-wider hover:underline cursor-pointer hover:underline-offset-2'>+2126-9923-2200</h3>
        </div>
        {/* Account */}
        <div className='col-span-1 space-y-6'>
            <h1 className='text-2xl font-semibold cursor-pointer hover:underline-offset-2'>Account</h1>
            <h2 className='tracking-wider hover:underline cursor-pointer hover:underline-offset-2'>My Account</h2>
            <h2 className='tracking-wider hover:underline cursor-pointer hover:underline-offset-2'>Login / Register</h2>
            <h2 className='tracking-wider hover:underline cursor-pointer hover:underline-offset-2'>Cart</h2>
            <h2 className='tracking-wider hover:underline cursor-pointer hover:underline-offset-2'>Wishlist</h2>
            <h2 className='tracking-wider hover:underline cursor-pointer hover:underline-offset-2'>Shop</h2>
        </div>
        {/* Quick Link */}
        <div className='col-span-1 space-y-6'>
            <h1 className='text-2xl font-semibold cursor-pointer'>Quick Link</h1>
            <h2 className='tracking-wider hover:underline cursor-pointer hover:underline-offset-2'>Privacy Policy</h2>
            <h2 className='tracking-wider hover:underline cursor-pointer hover:underline-offset-2'>Terms Of Use</h2>
            <h2 className='tracking-wider hover:underline cursor-pointer hover:underline-offset-2'>FAQ</h2>
            <h2 className='tracking-wider hover:underline cursor-pointer hover:underline-offset-2'>Contact</h2>
        </div>
        {/* Downlowad App */}
        <div className='col-span-1 space-y-6'>
            <h1 className='text-2xl font-semibold cursor-pointer'>Download App</h1>
            <div>
                <h2 className='font-medium text-sm text-white/50'>Save $3 with App New Uer Only.</h2>
                <div className='grid grid-cols-2 grid-rows-2 gap-1 mt-3'>
                    <div className='grid-rows-1 col-span-1'>
                        <img src={Appstore} alt="" className='w-[130px] cursor-pointer hover:underline-offset-2'/>
                    </div>
                    <div className='grid-rows-1 col-span-1'>
                        <img src={Googleplay} alt="" className='w-[140px] cursor-pointer hover:underline-offset-2' />
                    </div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;