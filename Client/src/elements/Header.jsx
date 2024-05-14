import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/Oneclick..svg";
import Search from "../assets/search 1.svg";
import User from "../assets/user.svg";
import Like from "../assets/liked.svg";
import cart from "../assets/cart.svg";
import Dropdown from "../components/Dropdown";
import { useSelector } from "react-redux";

const Header = (_) => {
    const [status, setStatus] = useState(false);
    const [info, setInfo] = useState(null);

    const switchArrow = (_) => {
        status ? setStatus(false) : setStatus(true);
    };
    const ToggleDrop = (type) => {
        switchArrow();
        setInfo(type);
    };
    const isLogged = useSelector((state) => state.auth.isLogged);
    return (
        <>
            {isLogged ? (
                <header>
                    {/* Uppper Header Section */}
                    <div className="h-[58px] flex justify-between items-center px-[120px] bg-[#F6F9F6] font-semibold text-[#7B8D9E] mb-1">
                        <p>
                            Summer Sale And Free Express Delivery -
                            <span className="underline cursor-pointer hover:decoration-2 hover:text-gray-700 transition-colors duration-200">
                                50% OFF
                            </span>
                        </p>
                        <div className="flex gap-[25px]" onClick={switchArrow}>
                            <div className="flex items-center gap-[6px] cursor-pointer group">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-5 h-5 group-hover:stroke-gray-700"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                    />
                                </svg>
                                <span
                                    className="group-hover:text-gray-700 font-poppins font-medium"
                                    onClick={(_) => setInfo("region")}
                                >
                                    Morocco
                                </span>
                                {status ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-3 h-3 group-hover:stroke-gray-700"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-3 h-3 group-hover:stroke-gray-700"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                )}
                                {status ? <Dropdown type={info} /> : ""}
                            </div>
                            <div
                                className="flex gap-[6px] items-center cursor-pointer transition-all duration-200 group"
                                onClick={switchArrow}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 stroke-1.5 group-hover:stroke-gray-700"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                                    />
                                </svg>
                                <span
                                    className="group-hover:text-gray-700 font-poppins font-medium"
                                    onClick={(_) => setInfo("language")}
                                >
                                    ENG
                                </span>
                                {status ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-3 h-3 group-hover:stroke-gray-700"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-3 h-3 group-hover:stroke-gray-700"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                )}
                                {status ? <Dropdown type={info} /> : ""}
                            </div>
                            <div
                                className="flex gap-[6px] items-center cursor-pointer group transition-all duration-200"
                                onClick={switchArrow}
                            >
                                <span
                                    className="group-hover:text-gray-700 font-poppins font-medium"
                                    onClick={(_) => setInfo("currency")}
                                >
                                    USD
                                </span>
                                {status ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-3 h-3 group-hover:stroke-gray-700"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-3 h-3 group-hover:stroke-gray-700"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                )}
                                {status ? <Dropdown type={info} /> : ""}
                            </div>
                            <Link
                                to="/contact"
                                className="group-hover:text-gray-700 font-poppins font-medium cursor-pointer"
                            >
                                Customer Service
                            </Link>
                        </div>
                    </div>
                    {/* Lower Header Section */}
                    <div className="px-[120px] h-[56px] pb-1 flex justify-between items-end">
                        <div className="flex items-center gap-[154px]">
                            {/* logo */}
                            <Link to="/">
                                <img
                                    src={Logo}
                                    alt=""
                                    className="cursor-pointer"
                                />
                            </Link>
                            {/* nav elements */}
                            <nav className="flex gap-[22px] font-poppins">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/today_deals">
                                    Today's deals
                                </NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                                <NavLink to="/about">About</NavLink>
                            </nav>
                        </div>

                        {/* user controls */}
                        <div className="flex gap-[27px]">
                            <div className="w-[285px] flex justify-between items-center bg-[#F6F9F6] px-2">
                                <input
                                    type="text"
                                    placeholder="What are you locking for?"
                                    className="bg-transparent outline-none focus:bg-transparent placeholder:text-[#7b8d9e71] placeholder:font-medium indent-1 border-none focus:ring-0"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 cursor-pointer stroke-2 stroke-gray-600"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </div>
                            <div className="flex items-center gap-[21px]">
                                <div className="bg-red-300 p-2.5 rounded-full grid place-content-center cursor-pointer">
                                    <img
                                        src={User}
                                        alt=""
                                        className="w-5 h-5"
                                        onClick={(_) => ToggleDrop("user")}
                                    />
                                </div>
                                {status ? <Dropdown type={info} /> : ""}
                                <img
                                    src={Like}
                                    alt=""
                                    className="w-5 h-5 cursor-pointer"
                                />
                                <Link to="/cart">
                                    <img
                                        src={cart}
                                        alt=""
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr className="mx-[120px] mt-1.5" />
                </header>
            ) : (
                <header>
                    {/* Uppper Header Section */}
                    <div className="h-[58px] flex justify-between items-center px-[120px] bg-[#F6F9F6] font-semibold text-[#7B8D9E] mb-1">
                        <p>
                            Summer Sale And Free Express Delivery -
                            <span className="underline cursor-pointer hover:decoration-2 hover:text-gray-700 transition-colors duration-200">
                                50% OFF
                            </span>
                        </p>
                        <div className="flex gap-[25px]" onClick={switchArrow}>
                            <div className="flex items-center gap-[6px] cursor-pointer group">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-5 h-5 group-hover:stroke-gray-700"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                    />
                                </svg>
                                <span
                                    className="group-hover:text-gray-700 font-poppins font-medium"
                                    onClick={(_) => setInfo("region")}
                                >
                                    Morocco
                                </span>
                                {status ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-3 h-3 group-hover:stroke-gray-700"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-3 h-3 group-hover:stroke-gray-700"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                )}
                                {status ? <Dropdown type={info} /> : ""}
                            </div>
                            <div
                                className="flex gap-[6px] items-center cursor-pointer transition-all duration-200 group"
                                onClick={switchArrow}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 stroke-1.5 group-hover:stroke-gray-700"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                                    />
                                </svg>
                                <span
                                    className="group-hover:text-gray-700 font-poppins font-medium"
                                    onClick={(_) => setInfo("language")}
                                >
                                    ENG
                                </span>
                                {status ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-3 h-3 group-hover:stroke-gray-700"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-3 h-3 group-hover:stroke-gray-700"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                )}
                                {status ? <Dropdown type={info} /> : ""}
                            </div>
                            <div
                                className="flex gap-[6px] items-center cursor-pointer group transition-all duration-200"
                                onClick={switchArrow}
                            >
                                <span
                                    className="group-hover:text-gray-700 font-poppins font-medium"
                                    onClick={(_) => setInfo("currency")}
                                >
                                    USD
                                </span>
                                {status ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-3 h-3 group-hover:stroke-gray-700"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-3 h-3 group-hover:stroke-gray-700"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                )}
                                {status ? <Dropdown type={info} /> : ""}
                            </div>
                            <Link
                                to="/contact"
                                className="group-hover:text-gray-700 font-poppins font-medium cursor-pointer"
                            >
                                Customer Service
                            </Link>
                        </div>
                    </div>
                    {/* Lower Header Section */}
                    <div className="px-[120px] h-[56px] pb-1 flex justify-between items-end">
                        <div className="flex items-center gap-[154px]">
                            {/* logo */}
                            <Link to="/">
                                <img
                                    src={Logo}
                                    alt=""
                                    className="cursor-pointer"
                                />
                            </Link>
                            {/* nav elements */}
                            <nav className="flex gap-[22px] font-poppins">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/today_deals">
                                    Today's deals
                                </NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/login">Log in</NavLink>
                            </nav>
                        </div>

                        {/* user controls */}
                        <div className="flex gap-[27px]">
                            <div className="w-[285px] flex justify-between items-center bg-[#F6F9F6] px-2">
                                <input
                                    type="text"
                                    placeholder="What are you locking for?"
                                    className="bg-transparent outline-none focus:bg-transparent placeholder:text-[#7b8d9e71] placeholder:font-medium indent-1 border-none focus:ring-0"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 cursor-pointer stroke-2 stroke-gray-600"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </div>
                            <div className="flex items-center gap-[21px]">
                                <div className="bg-gray-100 p-2.5 rounded-full grid place-content-center cursor-pointer">
                                    <img
                                        src={User}
                                        alt=""
                                        className="w-5 h-5"
                                        onClick={(_) => ToggleDrop("user")}
                                    />
                                </div>
                                {status ? <Dropdown type={info} /> : ""}
                                <img
                                    src={Like}
                                    alt=""
                                    className="w-5 h-5 cursor-pointer"
                                />
                                <Link to="/cart">
                                    <img
                                        src={cart}
                                        alt=""
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr className="mx-[120px] mt-1.5" />
                </header>
            )}
        </>
    );
};

export default Header;
