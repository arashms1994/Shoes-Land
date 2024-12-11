import Back from "../../../layout/back/Back.layout";
import { LoginSchema } from "../../../zod/LoginSchema.zod";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative flex flex-col justify-center items-center pt-28">
        <Back address="/" />
        <div className="w-14 h-20">
          <img
            src="/src/assets/svg/logo-black.svg"
            alt="Shoea-logo"
            className="w-full h-full"
          />
        </div>
        <h1 className="font-semibold text-3xl text-[#152536] mt-28">
          Login to Your Account
        </h1>
        <form
          action=""
          className="flex flex-col items-center justify-center px-6 pb-4"
        >
          <div className="flex justify-start items-center bg-[#FAFAFA] pl-3 mt-11 w-96 h-12 rounded gap-1">
            <img src="/src/assets/svg/email.svg" alt="email" />
            <input
              type="text"
              className="w-full pl-1 bg-transparent h-full py-2"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-between items-center bg-[#FAFAFA] pl-3 my-5 w-96 h-12 rounded gap-1">
            <img src="/src/assets/svg/lock.svg" alt="password" />
            <input
              type="password"
              className="w-full px-1 bg-transparent h-full py-2"
              placeholder="Password"
            />
            <img
              src="/src/assets/svg/eye.svg"
              alt="eye"
              className="mr-1 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between gap-28">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="rememberMe" />
              <label className="text-base font-normal" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <button
              onClick={() => navigate("/forgot-password")}
              className="text-base font-normal cursor-pointer bg-transparent border-none"
            >
              Forgot Password?
            </button>
          </div>
          <button className="bg-[#212529] rounded-full w-96 h-12">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
