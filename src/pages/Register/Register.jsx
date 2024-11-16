import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { useAppContext } from "../../ContextApiProvider";
const Register = () => {
  const { onRegister, register, handleSubmit, errors } = useAppContext();

  return (
    <main className=" bg-zinc-100 pb-10  ">
      <header className="">
        <NavBar />
      </header>

      <div className="  min-h-[80vh] mt-5 flex items-center justify-center">
        <div className=" px-10 py-5 bg-white rounded-sm  max-md:p-10 max-sm:p-5 lg:w-3/6 max-sm:w-full flex  flex-col items-center ">
          <h1 className=" text-xl font-semibold">Login your account</h1>
          <div className=" divider"></div>
          <form
            onSubmit={handleSubmit((data) => onRegister(data))}
            className=" w-full"
          >
            <div className=" w-full">
              <h1>Name</h1>
              <input
                type="text"
                name="name"
                {...register("name", { required: "Fill the name" })}
                placeholder="Enter your name"
                className=" pl-4 h-12 outline-none rounded-sm w-full mt-2 bg-slate-100"
              />
              {errors.name && (
                <h1 className="text-xs text-red-500 mt-2 ml-2">
                  {errors.name.message}
                </h1>
              )}
            </div>
            <div className=" w-full mt-5">
              <h1>Email</h1>
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
                placeholder="Enter your email address"
                className=" pl-4 h-12 outline-none rounded-sm w-full mt-2 bg-slate-100"
              />
              {errors.password && (
                <h1 className="text-xs text-red-500 mt-2 ml-2">
                  {errors.password.message}
                </h1>
              )}
            </div>
            <div className=" w-full mt-5">
              <h1>Image Url</h1>
              <input
                type="text"
                name="image"
                {...register("image", { required: "Fill the image" })}
                placeholder="Enter your email address"
                className=" pl-4 h-12 outline-none rounded-sm w-full mt-2 bg-slate-100"
              />
              {errors.image && (
                <h1 className="text-xs text-red-500 mt-2 ml-2">
                  {errors.image.message}
                </h1>
              )}
            </div>
            <div className="  mt-5">
              <div className="flex items-center gap-4">
                <input 
                type="checkbox" 
                name="term"
                {...register("term", { required: "Fill the Term" })}
                 />
                <h1>Accept Terms & Conditions</h1>
              </div>

              {errors.term && (
                <h1 className="text-xs text-red-500 mt-2 ml-2">
                  {errors.term.message}
                </h1>
              )}
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
