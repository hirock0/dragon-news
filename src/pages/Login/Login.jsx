import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { useAppContext } from "../../ContextApiProvider";

const Login = () => {
  const { onLogin,  register, handleSubmit,errors } = useAppContext();

  return (
    <main className=" bg-zinc-100 ">
      <NavBar />
      <div className="  min-h-[90vh] flex items-center justify-center">
        <div className=" p-20 bg-white rounded-sm  max-md:p-10 max-sm:p-5 lg:w-3/6 max-sm:w-full flex  flex-col items-center ">
          <h1 className=" text-xl font-semibold">Login your account</h1>
          <div className=" divider"></div>
          <form
            onSubmit={handleSubmit((data) => onLogin(data))}
            className=" w-full"
          >
            <div className=" w-full">
              <h1>Email Address</h1>
              <input
                type="email"
                name="email"
                {...register("email", { required: "Fill the email" })}
                placeholder="Enter your email address"
                className=" pl-4 h-12 outline-none rounded-sm w-full mt-2 bg-slate-100"
              />
              {errors.email && (
                <h1 className="text-xs text-red-500 mt-2 ml-2">
                  {errors.email.message}
                </h1>
              )}
            </div>
            <div className=" w-full mt-5">
              <h1>Password</h1>
              <input
                type="password"
                name="password"
                {...register("password", { required: "Fill the password" })}
                placeholder="Enter your password"
                className=" pl-4 h-12 outline-none rounded-sm w-full mt-2 bg-slate-100"
              />
              {errors.password && (
                <h1 className=" text-xs text-red-500 mt-2 ml-2">
                  {errors.password.message}
                </h1>
              )}
            </div>

            <button
              type="submit"
              className=" bg-slate-600 text-white w-full h-12 mt-5 rounded-sm"
            >
              Login
            </button>
          </form>
          <div className=" flex items-center mt-5 gap-1">
            <h1>Don't Have An Account?</h1>
            <Link to={"/register"} className=" text-red-600">
              Register
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
