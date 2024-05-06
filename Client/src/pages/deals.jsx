import { useState } from "react";
import Dealscard from "../components/dealsCard";
import Dogfood from '../assets/dog food.png'
import camera from '../assets/camera.png'
import speaker from '../assets/speaker.png'
import cosmetic from '../assets/products.png'
import electricCar from '../assets/elextrric car.png'
import sneaker from '../assets/sneakers.png'
import xboxConsole from '../assets/console controler.png'
import laptop from '../assets/Gaming Lap.png'
import pink from '../assets/pink jacket.png'
import shelf from '../assets/bookshelf.png'


const Deals = _ => {
    const [showprd, setShowprd] = useState('hidden');
    const [showsize, setShowsize] = useState('hidden')
    const handleShowprd = _ => {
        showprd == 'hidden' ? setShowprd('block') : setShowprd('hidden')
    }
    const handleShowsize = _ => {
        showsize == 'hidden' ? setShowsize('block') : setShowsize('hidden')
    }

    return <section className=" h-[120rem]">
        <aside className='w-[360px] border-r-[1px] pt-[30px] px-[30px] space-y-[16px] max-h-[569.5px] absolute'>
            {/* Type of products */}
            <div className="space-y-5">
                <div className="flex justify-between items-center cursor-pointer" onClick={handleShowprd}>
                    <h1 className="text-lg font-inter font-semibold tracking-tight ">Type of products</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className={`grid grid-cols-3 gap-4 ${showprd} transition-all duration-200`}>
                    <p className="h-10 w-21 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-sm flex justify-center items-center font-medium bg-black text-white cursor-pointer">Bags</p>
                    <p className="h-10 w-21 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-sm flex justify-center items-center font-medium bg-gray-50 cursor-pointer">Jackets</p>
                    <p className="h-10 w-21 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-sm flex justify-center items-center font-medium bg-gray-50 cursor-pointer">Glasses</p>
                    <p className="h-10 w-21 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-sm flex justify-center items-center font-medium bg-gray-50 cursor-pointer">Belts</p>
                    <p className="h-10 w-21 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-sm flex justify-center items-center font-medium bg-gray-50 cursor-pointer">Bracelets</p>
                    <p className="h-10 w-21 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-sm flex justify-center items-center font-medium bg-gray-50 cursor-pointer">Wallets</p>
                    <p className="h-10 w-21 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-sm flex justify-center items-center font-medium bg-gray-50 cursor-pointer">Foulard</p>
                    <p className="h-10 w-21 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-sm flex justify-center items-center font-medium bg-gray-50 cursor-pointer">Pants</p>
                    <p className="h-10 w-21 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-sm flex justify-center items-center font-medium bg-gray-50 cursor-pointer">Monitors</p>
                    <p className="h-10 w-21 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-sm flex justify-center items-center font-medium bg-gray-50 cursor-pointer">Consoles</p>
                    <p className="h-10 w-21 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-sm flex justify-center items-center font-medium bg-gray-50 cursor-pointer">Laptop</p>
                </div>
            </div>
            {/* Size */}
            <div className="space-y-5">
                <div className="flex justify-between cursor-pointer" onClick={handleShowsize}>
                    <h1 className="text-lg font-inter font-semibold tracking-tight">Size</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className={`grid grid-cols-4 gap-5 ${showsize}`}>
                    <p className="h-10 w-19 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-lg flex justify-center items-center font-medium bg-gray-50 cursor-pointer">Xs</p>
                    <p className="h-10 w-19 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-lg flex justify-center items-center font-medium bg-gray-50 cursor-pointer">S</p>
                    <p className="h-10 w-19 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-lg flex justify-center items-center font-medium bg-black text-white">M</p>
                    <p className="h-10 w-19 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-lg flex justify-center items-center font-medium bg-gray-50 cursor-pointer">L</p>
                    <p className="h-10 w-19 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-lg flex justify-center items-center font-medium bg-gray-50 cursor-pointer">XL</p>
                    <p className="h-10 w-19 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-lg flex justify-center items-center font-medium bg-gray-50 cursor-pointer">XXL</p>
                    <p className="h-10 w-19 p-1 ring-1 ring-black/20 text-center rounded-full font-poppins text-lg flex justify-center items-center font-medium bg-gray-50 cursor-pointer">XXXL</p>
                    
                </div>
            </div>
            {/* Color */}
            <div>
                <div className="flex justify-between cursor-pointer" onClick={handleShowsize}>
                    <h1 className="text-lg font-inter font-semibold tracking-tight">Color</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </aside>
        {/* Products */}
            <div className='p-10 ml-[360px] grid grid-cols-4 gap-5'>
            <Dealscard img={Dogfood} title="Breed Dry Dog Food" price={100}/>
            <Dealscard img={camera} title="CANON EOS DSLR Camera" price={360}/>
            <Dealscard img={speaker} title="JBL Boombox 3" price={700}/>
            <Dealscard img={cosmetic} title="Curology Product Set" price={200}/>
            <Dealscard img={electricCar} title="Kids Electric Car" price={950}/>
            <Dealscard img={sneaker} title="Jr. Zoom Soccer Cleats" price={1160}/>
            <Dealscard img={xboxConsole} title="GP11 Shooter USB Gamepad" price={650}/>
            <Dealscard img={laptop} title="Lenovo Legion gaming lap" price={1500}/>
            <Dealscard img={pink} title="The north coat" price={150}/>
            <Dealscard img={shelf} title="Small BookSelf" price={500}/>
            {/* Second part */}
            <Dealscard img={Dogfood} title="Breed Dry Dog Food" price={100}/>
            <Dealscard img={camera} title="CANON EOS DSLR Camera" price={360}/>
            <Dealscard img={speaker} title="JBL Boombox 3" price={700}/>
            <Dealscard img={cosmetic} title="Curology Product Set" price={200}/>
            
        </div>
    </section>
}

export default Deals;