import { useNavigate, useParams } from 'react-router-dom'
import verified from '../assets/animations/verified.json'
import Lottie from "lottie-react";

const ActivationPage = _ => {
    const navigate = useNavigate()
    const {activationcode} = useParams()
    const data = activationcode.split("=")
    // this is the activation code that we need
    const code = data[1].split("&")[0]

    // function 
    const verifyUser = async (code) => {
        await fetch(`http://localhost:8080/api/v1/auth/verify/${code}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            }, 
        })
        console.log('Done')
            
    }


    return <div className="grid place-content-center h-screen font-poppins">
    <div className="grid grid-cols-2 ring-1 rounded-md shadow-md pl-5 pr-10 py-10">
    <div className="flex justify-center ">
            <Lottie
                animationData={verified}
                style={{ width: "400px" }}
            />
        </div>
        <div className="flex flex-col justify-center h-[600px]">
            <h2 className="text-6xl font-semibold leading-tight mb-10">
                Congrats {data[2]} <br /> your email is verified
            </h2>
            <p className="max-w-[600px] mb-10 leading-relaxed text-slate-600">
                {" "}
                It's time now to enjoy the new shopping experience in here at <span className='text-indigo-400 underline cursor-pointer'>Oneclick</span>. We hope you enjoy your journey here and don't forget to contact us if anything happends .{" "}
            </p>
            <button
                className="bg-[#bff200] w-fit py-2 px-10 rounded-md"
                onClick={(_) => {
                    verifyUser(code)
                    navigate("/login");
                }}
            >
                Go to login
            </button>
        </div>
    </div>
</div>
}


export default ActivationPage;