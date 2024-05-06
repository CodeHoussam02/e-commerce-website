import { Link } from 'react-router-dom';
import Card from '../../components/card';
import Dogfood from '../../assets/dog food.png'
import camera from '../../assets/camera.png'
import speaker from '../../assets/speaker.png'
import cosmetic from '../../assets/products.png'
import electricCar from '../../assets/elextrric car.png'
import sneaker from '../../assets/sneakers.png'
import xboxConsole from '../../assets/console controler.png'
import laptop from '../../assets/Gaming Lap.png'
import pink from '../../assets/pink jacket.png'
import shelf from '../../assets/bookshelf.png'


const Ourproducts = _ => {
    return <section className='mt-[70px] px-[120px] h-[62rem] mb-[40px]'>
        <div className='flex items-center gap-[30px]'>
            <span className='block w-[30px] h-[3.5rem] rounded-md bg-[#1B2C1C]'></span>
            <p className='text-2xl font-semibold font-poppins tracking-tight text-gray-800'>Our products</p>
        </div>
        <h1 className='mt-[40px] text-4xl font-semibold font-inter'>Explore Our Products</h1>
        <div className='mt-[82px] grid grid-cols-5 gap-10'>
            <Card img={Dogfood} title="Breed Dry Dog Food" price={100}/>
            <Card img={camera} title="CANON EOS DSLR Camera" price={360}/>
            <Card img={speaker} title="JBL Boombox 3" price={700}/>
            <Card img={cosmetic} title="Curology Product Set" price={200}/>
            <Card img={electricCar} title="Kids Electric Car" price={950}/>
            <Card img={sneaker} title="Jr. Zoom Soccer Cleats" price={1160}/>
            <Card img={xboxConsole} title="GP11 Shooter USB Gamepad" price={650}/>
            <Card img={laptop} title="Lenovo Legion gaming lap" price={1500}/>
            <Card img={pink} title="The north coat" price={150}/>
            <Card img={shelf} title="Small BookSelf" price={500}/>
        </div>
    </section>
}

export default Ourproducts;