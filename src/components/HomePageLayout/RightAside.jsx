import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const RightAside = () => {
    return (
        <div className={`  h-full   w-52 text-nowrap`}>
            <div className="">
                {/* ------ */}
                <div className="">
                    <h1 className=" text-xl mb-3 font-semibold">Login With</h1>
                    <div className=" px-5">
                        <div className=" flex flex-col gap-3">
                            <button className=" border-cyan-400 rounded-lg border-2 p-1 hover:bg-slate-200 active:bg-slate-300">Google</button>
                            <button className=" border-slate-500 rounded-lg border-2 p-1 hover:bg-slate-200 active:bg-slate-300">GitHub</button>
                        </div>
                    </div>
                </div>
                {/* ------ */}


                <div className=" mt-5">
                    <h1 className=" text-xl mb-3 font-semibold">Find Us On</h1>
                    <div className=" px-5">
                        <div className=" flex flex-col border-x">
                            
                            <NavLink to={"/"} className=" px-5 flex items-center gap-3 border-y  py-5 hover:bg-slate-200 active:bg-slate-300">
                                <FaFacebook size={20} className="text-blue-600" />
                                <h1>Facebook</h1>
                            </NavLink>

                            <NavLink to={"/"} className=" px-5 flex items-center gap-3  py-5 hover:bg-slate-200 active:bg-slate-300">
                                <FaTwitter size={20} className="text-cyan-400" />
                                <h1>Twitter</h1>
                            </NavLink>

                            <NavLink to={"/"} className=" px-5 flex items-center gap-3 border-y  py-5 hover:bg-slate-200 active:bg-slate-300">
                                <FaSquareWhatsapp  size={20} className="text-red-600" />
                                <h1>WhatsApp</h1>
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* ---------- */}
                <div className=" mt-5 bg-slate-100 p-2">
                    <h1 className=" text-xl mb-3 font-semibold">Q-Zone</h1>
                    <div className=" px-5">
                        <div className=" flex flex-col gap-3">
                            <img src="/assets/swimming.png" alt="gallery" />
                            <img src="/assets/class.png" alt="gallery" />
                            <img src="/assets/playground.png" alt="gallery" />
                            <img src="/assets/bg.png" alt="gallery" />
                        </div>
                    </div>
                </div>
                {/* ---------------------- */}
            </div>
        </div>
    )
}

export default RightAside
