import Herosection from './home_sections/HeroSection';
import Newarrivals from './home_sections/Newarrivals';
import Categories from './home_sections/Categories';
import Carouselsec from './home_sections/Carousection';
import Ourproducts from './home_sections/Ourproducts';
import Featured from './home_sections/Featured';
import Whyus from './home_sections/Whyus';
import Partners from '../components/Partners';

const Home = _ => {
    return <>
        <Herosection />
        <Newarrivals />
        <Categories />
        <Carouselsec />
        <Ourproducts />
        <Featured />
        <Whyus />
    </>
}

export default Home;