import { Link } from 'react-router-dom'
import heroImg from '../../assets/header.png'
import Partners from '../../components/Partners';
import { EmblaCarousel } from '../../components/Embelacarousel';

const Herosection = _ => {
    return <section className='flex px-[120px] mb-5'>
        <aside className='w-[240px] border-r-[1px] pt-[30px] pr-[30px] space-y-[16px] max-h-[569.5px]'>
            <Link className='block hover:font-medium'>Women's Fashion</Link>
            <Link className='block hover:font-medium'>Men's Fashion</Link>
            <Link className='block hover:font-medium'>Electronics</Link>
            <Link className='block hover:font-medium'>Home & Lifestyle</Link>
            <Link className='block hover:font-medium'>Medicine</Link>
            <Link className='block hover:font-medium'>Sport & Outdoor</Link>
            <Link className='block hover:font-medium'>Baby's & Toys</Link>
            <Link className='block hover:font-medium'>Groceries & Pets</Link>
            <Link className='block hover:font-medium'>Health & Beauty</Link>
        </aside>
        <div className='m-[39px] bg-black w-full h-[526px] relative'>
            <EmblaCarousel img={heroImg} />
        </div>
    </section>
}


export default Herosection;