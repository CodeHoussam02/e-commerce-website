import samsung from '../assets/logos/samsung.svg'
import iphone from '../assets/logos/iphone_logo.svg'
import xbox from '../assets/logos/xbox.svg'
import microsoft from '../assets/logos/Microsoft_logo.svg'
import adidas from '../assets/logos/adidas.svg'
import lenovo from '../assets/logos/Lenovo.svg'

const Partners = ({title}) => {
    return <div className="">
        {
            title ? 
            <h2 className="text-center text-[40px] font-semibold font-inter mb-10">Our Partners</h2>
            : ''
        }
        <div className="scroller m-auto max-w-[900px] py-2 overflow-x-hidden">
            <ul className="tag-list scroller__inner flex gap-[4rem]">
                <img src={iphone} alt="" />
                <img src={microsoft} alt="" />
                <img src={xbox} alt="" />
                <img src={samsung} alt="" />
                <img src={adidas} alt="" />
                <img src={lenovo} alt="" />
                {/* Second Part */}
                <img src={iphone} alt="" />
                <img src={microsoft} alt="" />
                <img src={xbox} alt="" />
                <img src={samsung} alt="" />
                <img src={adidas} alt="" />
                <img src={lenovo} alt="" />
            </ul>
        </div>
    </div>
}

export default Partners;