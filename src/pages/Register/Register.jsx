import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { useAppContext } from "../../ContextApiProvider";
const Register = () => {
  const { onRegister } = useAppContext();

  return (
    <main className=" bg-zinc-100 pb-10  ">
      <header className="">
        <NavBar />
      </header>

      <div className="  min-h-[80vh] mt-5 flex items-center justify-center">
        <div className=" px-10 py-5 bg-white rounded-sm  max-md:p-10 max-sm:p-5 lg:w-3/6 max-sm:w-full flex  flex-col items-center ">
          <h1 className=" text-xl font-semibold">Login your account</h1>
          <div className=" divider"></div>
          <form onSubmit={onRegister} className=" w-full">
            <div className=" w-full">
              <h1>Email Address</h1>
              <input
                type="text"
                name="email"
                placeholder="Enter your email address"
                className=" pl-4 h-12 outline-none rounded-sm w-full mt-2 bg-slate-100"
              />
            </div>
            <div className=" w-full mt-5">
              <h1>Email Address</h1>
              <input
                type="text"
                name="email"
                placeholder="Enter your email address"
                className=" pl-4 h-12 outline-none rounded-sm w-full mt-2 bg-slate-100"
              />
            </div>
            <div className=" w-full mt-5">
              <h1>Email Address</h1>
              <input
                type="text"
                name="email"
                placeholder="Enter your email address"
                className=" pl-4 h-12 outline-none rounded-sm w-full mt-2 bg-slate-100"
              />
            </div>
            <div className=" w-full mt-5">
              <h1>Email Address</h1>
              <input
                type="text"
                name="email"
                placeholder="Enter your email address"
                className=" pl-4 h-12 outline-none rounded-sm w-full mt-2 bg-slate-100"
              />
            </div>
            <div className=" flex items-center gap-4 mt-5">
              <input type="checkbox" name="checkbox" />
              <h1>Accept Terms & Conditions</h1>
            </div>
            <button
              type="submit"
              className=" bg-slate-600 text-white w-full h-12 mt-5 rounded-sm"
            >
              register
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
