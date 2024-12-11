import { Input } from "../../../layout/formfield/Input.layout";
import Back from "../../../layout/back/Back.layout";

const Login = () => {


  return (
    <>
      <div className="relative flex flex-col">
        <Back address="/" />
        <div className="w-14 h-20">
            <img src="/src/assets/svg/logo-black.svg" alt="Shoea-logo" className="w-full h-full" />
        </div>
        <h1 className="font-semibold text-3xl text-[#152536] mt-28">Login to Your Account</h1>
      </div>
    </>
  );
};

export default Login;
