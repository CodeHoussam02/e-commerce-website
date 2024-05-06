import Card from '../../components/card'
import Guccibag from '../../assets/gucci-bag.png'
import Keyboard from '../../assets/keyboard.png'
import Monitor from '../../assets/monitor.png'
import Jacket from '../../assets/jaket.png'
import Chair from '../../assets/chair.png'
import console from '../../assets/console.png'
import { Link } from 'react-router-dom'

const Newarrivals = _ => {
    return <section className='mt-[132px] px-[120px] h-[40rem]'>
        <div className='flex items-center gap-[30px]'>
            <span className='block w-[30px] h-[3.5rem] rounded-md bg-[#1B2C1C]'></span>
            <p className='text-2xl font-semibold font-poppins tracking-tight text-gray-800'>New arrivals</p>
        </div>
        <div className='mt-[50px] flex gap-10 overflow-x-hidden mb-[65px]'>
            <Card reviews={5} img={Guccibag} title='Gucci duffle bag' price={960}/>
            <Card reviews={5} img={console} title="HAVIT HV-G92 Gamepad" price={120} old={160} alert={true} alertMsg={30}/>
            <Card reviews={5} img={Keyboard} title="AK-900 Wired Keyboard" price={960} old={1150} alert={true} alertMsg={45}/>
            <Card reviews={5} img={Monitor} title="IPS LCD Gaming Monitor" price={370} old={400}/>
            <Card reviews={5} img={Jacket} title="Quilted Satin Jacket" price={960} />
            <Card reviews={5} img={Chair} title="S-Series Comfort Chair" price={375} old={400}/>
        </div>
        <div className='flex justify-center'>
            <Link className='w-[300px] h-[56px] bg-[#1B2C1C] rounded-md grid place-content-center text-white text-lg mb-[62px]'>View All products</Link>
        </div>
        <hr />
    </section>
}

export default Newarrivals;