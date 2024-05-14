import Lottie from "lottie-react";
import verification from "../assets/animations/verification.json";
import { useNavigate } from "react-router-dom";

const Verification = () => {
    const navigate = useNavigate();
    return (
        <div className="grid place-content-center h-screen font-poppins">
            <div className="grid grid-cols-2 ring-1 rounded-md shadow-md pl-20 py-10">
                <div className="flex flex-col justify-center">
                    <h2 className="text-6xl font-semibold leading-tight mb-10">
                        It's time to verify <br /> your mail now
                    </h2>
                    <p className="max-w-[600px] mb-10 leading-relaxed text-slate-600">
                        {" "}
                        A verification link has been sent to your mailbox.
                        Please check it and log in again to continue. Once
                        you've verified your account, you can fully enjoy our
                        services. Thank you for your attention to this matter.
                        We value your security and are committed to providing a
                        seamless user experience .{" "}
                    </p>
                    <button
                        className="bg-[#bff200] w-fit py-2 px-10 rounded-md"
                        onClick={(_) => {
                            navigate("/login");
                        }}
                    >
                        go back
                    </button>
                </div>
                <div className="flex justify-center ">
                    <Lottie
                        animationData={verification}
                        style={{ width: "600px" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Verification;
