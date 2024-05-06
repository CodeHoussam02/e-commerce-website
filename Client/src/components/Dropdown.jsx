const RegionDrop = _ => {
    return <div className="bg-white ring-1 ring-gray-200 absolute top-10 left-[81.5rem] px-2 py-1 rounded-md shadow-md z-10">
        <ul>
            <li className="py-1 px-1.5 cursor-pointer font-medium text-gray-400 hover:bg-[#BFF200] hover:text-gray-800 rounded-md">Morocco</li>
            <li className="py-1 px-1.5 cursor-pointer font-medium text-gray-400 hover:bg-[#BFF200] hover:text-gray-800 rounded-md">United Kingdom</li>
            <li className="py-1 px-1.5 cursor-pointer font-medium text-gray-400 hover:bg-[#BFF200] hover:text-gray-800 rounded-md">United States</li>
            <li className="py-1 px-1.5 cursor-pointer font-medium text-gray-400 hover:bg-[#BFF200] hover:text-gray-800 rounded-md">Egypt</li>
            <li className="py-1 px-1.5 cursor-pointer font-medium text-gray-400 hover:bg-[#BFF200] hover:text-gray-800 rounded-md">France</li>
        </ul>
    </div>
}

const Langdrop = _ => {
    return <div className="w-[4rem] bg-white ring-1 ring-gray-200 absolute top-10 left-[92.9rem] px-2 py-1 rounded-md shadow-md z-10">
        <ul>
            <li className="py-1 px-1.5 cursor-pointer font-medium text-gray-400 hover:bg-[#BFF200] hover:text-gray-800 rounded-md">ENG</li>
            <li className="py-1 px-1.5 cursor-pointer font-medium text-gray-400 hover:bg-[#BFF200] hover:text-gray-800 rounded-md">ARB</li>
            <li className="py-1 px-1.5 cursor-pointer font-medium text-gray-400 hover:bg-[#BFF200] hover:text-gray-800 rounded-md">FR</li>
        </ul>
    </div>
}

const Currencydrop = _ => {
    return <div className="w-[4rem] bg-white ring-1 ring-gray-200 absolute top-10 left-[97.5rem] px-2 py-1 rounded-md shadow-md z-10">
        <ul>
            <li className="py-1 px-1.5 cursor-pointer font-medium text-gray-400 hover:bg-[#BFF200] hover:text-gray-800 rounded-md">USD</li>
            <li className="py-1 px-1.5 cursor-pointer font-medium text-gray-400 hover:bg-[#BFF200] hover:text-gray-800 rounded-md">EUR</li>
            <li className="py-1 px-1.5 cursor-pointer font-medium text-gray-400 hover:bg-[#BFF200] hover:text-gray-800 rounded-md">MAD</li>
        </ul>
    </div>
}

const Userdrop = _ => {
    return <div className="bg-white ring-1 ring-gray-200 absolute top-[6.3rem] left-[98.2rem] px-4 py-2 rounded-md text-black text-lg font-normal shadow-md z-10">
        <ul className="space-y-2 divide-y-2 divide-white/10">
            <li className='flex items-center gap-5 py-1  cursor-pointer hover:'>
                <i className="fa-regular fa-user"></i>
                <p>Manage my account</p>
            </li>
            <li className="flex items-center gap-4 py-1 cursor-pointer ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5.5 h-5 stroke-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
                <p>My Orders</p>
            </li>
            <li className="flex items-center gap-5 py-1 cursor-pointer ">
                <i className="fa-regular fa-circle-xmark"></i>
                <p>My Collections</p>
            </li>
            <li className="flex items-center gap-4 py-1 cursor-pointer ">
                <i className="fa-solid fa-star"></i>
                <p>My Reviews</p>
            </li>
            <li className="flex items-center gap-4 py-1 cursor-pointer ">
                <i className="fa-solid fa-arrow-right-from-bracket pl-1"></i>
                <p>Log out</p>
            </li>
        </ul>
    </div>
}

const Dropdown = ({type}) => {
    switch (type) {
        case "region": return <RegionDrop />
        case "language": return <Langdrop />
        case "currency": return <Currencydrop />
        case "user": return <Userdrop />
    }
}



export default Dropdown;