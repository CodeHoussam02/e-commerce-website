import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import validation from "../custumFunctions/validation";
import axios from "axios";
import clearInputs from "../custumFunctions/cleaar.inputs";

const Login = (_) => {
    const HOST = "http://localhost:8080";
    const navigate = useNavigate();
    const fullnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [data, setData] = useState({
        email: "",
        password: "",
    });
    // store errors
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
    const [status, setStatus] = useState();
    // registration function
    const handleSubmit = async (e) => {
        e.preventDefault();
        // validate our data and set errors if exists
        setErrors(validation(data));
        const { email, password } = data;
        try {
            fetch(`${HOST}/api/v1/auth/login`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Error: ${response.statusText}`); // Throw an error for non-2xx responses
                    }
                    return response.json(); // Assuming the response is JSON
                })
                .then((data) => {
                    console.log("Data ", data);
                    if (data.status == "SUCCESS") {
                        clearInputs(fullnameRef, emailRef, passwordRef);
                        toast.success("Success"); // Handle successful signup with data (optional)
                    }
                })
                .catch((error) => {
                    console.log(error)
                    toast.error("Login failed: Please verify your account first"); // More specific error message based on the error
                });
        } catch (err) {
            console.log("Error : ", err.message);
        }
    };
    // register
    return (
        <>
            <section className="mt-[70px] px-[120px] h-[55rem]">
                <Toaster richColors />
                <div className="w-full py-2 font-normal text-lg">
                    <h1 className="text-gray-400">
                        <Link to="/" className="hover:text-gray-600">
                            Home
                        </Link>
                        <span className="ml-3 mr-3">/</span>
                        <span className="text-gray-900">Login</span>
                    </h1>
                </div>
                <div className="h-[55rem] flex justify-center mt-10">
                    <div className="w-[30vw] h-[60vh] bg-white divide-y-2 divide-dashed p-4 ring-1 ring-gray-200 rounded-lg">
                        <div className="mb-3 mt-6 text-center relative">
                            <h3 className="text-gray-400 tracking-tighter">
                                Log in to
                            </h3>
                            <h1 className="text-xl font-bold tracking-wide mb-7">
                                Oneclick
                                <span className="font-semibold text-indigo-500">
                                    .
                                </span>
                            </h1>
                            <button className="bg-black mb-10 flex items-center m-auto py-2.5 px-16 rounded-lg space-x-4">
                                <div>
                                    <i className="fa-brands fa-google text-white text-md"></i>
                                </div>
                                <p className="text-white font-semibold text-md">
                                    Connect with google
                                </p>
                            </button>
                            <p className="absolute left-[16rem] top-[9.4rem] w-10 h-10 text-md font-semibold text-gray-400 rounded-full bg-white">
                                or
                            </p>
                        </div>
                        <div>
                            <form className="my-12" onSubmit={handleSubmit}>
                                {errors.email ? (
                                    <div className="ring-1 ring-red-400 mb-8 w-[28rem] mx-auto relative p-1 rounded-md">
                                        <i className="fa-regular fa-envelope text-red-400 text-lg ml-3 mr-1"></i>
                                        <input
                                            type="email"
                                            className="border-none w-[24rem] focus:ring-0 text-lg placeholder:font-semibold placeholder-red-400"
                                            placeholder="Your email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    email: e.target.value,
                                                })
                                            }
                                            ref={emailRef}
                                        />
                                        <small className="absolute left-0 top-[3.5rem] font-poppins font-medium text-red-500 text-dark-tremor-content-subtle">
                                            {errors.email}.
                                        </small>
                                    </div>
                                ) : (
                                    <div className="ring-1 ring-gray-300 mb-5 w-[28rem] mx-auto relative p-1 rounded-md">
                                        <i className="fa-regular fa-envelope text-gray-400 text-lg ml-3 mr-1"></i>
                                        <input
                                            type="email"
                                            className="border-none w-[24rem] focus:ring-0 text-lg placeholder:font-semibold placeholder-gray-400"
                                            placeholder="Your email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    email: e.target.value,
                                                })
                                            }
                                            ref={emailRef}
                                        />
                                    </div>
                                )}
                                {errors.password ? (
                                    <div className="ring-1 ring-red-400 mb-8 w-[28rem] mx-auto relative p-1 rounded-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="w-4.5 h-6 stroke-red-400 inline-block ml-2 mr-1"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                            />
                                        </svg>
                                        <input
                                            type="password"
                                            className="border-none w-[24rem] focus:ring-0 text-lg placeholder:font-semibold placeholder-red-400"
                                            placeholder="Your password"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    password: e.target.value,
                                                })
                                            }
                                            ref={passwordRef}
                                        />
                                        <small className="absolute left-0 top-[3.5rem] font-poppins font-medium text-red-500 text-dark-tremor-content-subtle">
                                            {errors.password}.
                                        </small>
                                    </div>
                                ) : (
                                    <div className="ring-1 ring-gray-300 mb-6 w-[28rem] mx-auto relative p-1 rounded-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="w-4.5 h-6 stroke-gray-500 inline-block ml-2 mr-1"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                            />
                                        </svg>
                                        <input
                                            type="password"
                                            className="border-none w-[24rem] focus:ring-0 text-lg placeholder:font-semibold placeholder-gray-400"
                                            placeholder="Your password"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    password: e.target.value,
                                                })
                                            }
                                            ref={passwordRef}
                                        />
                                    </div>
                                )}
                                <div className="grid place-content-center mb-12">
                                    <button
                                        type="submit"
                                        className="w-[28rem] ring-1 ring-gray-400/50 py-2.5 bg-gray-100 font-semibold tracking-tighter rounded-md"
                                    >
                                        Log in
                                    </button>
                                </div>
                            </form>
                            <div className="text-center">
                                <Link
                                    to="/forgotmail"
                                    className="font-semibold mb-2 cursor-pointer hover:underline"
                                >
                                    Forgot password?
                                </Link>
                                <h2 className="font-semibold text-gray-400 cursor-pointer">
                                    Don't have an account?
                                    <Link
                                        to="/signup"
                                        className="ml-1 text-black hover:underline"
                                    >
                                        Sign up
                                    </Link>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
