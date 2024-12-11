import Back from "../../../layout/back/Back.layout";
import { LoginSchema } from "../../../zod/LoginSchema.zod";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  //=========== UseStates ============
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  // =========== UseEffect ========
  useEffect(() => {
    const btn = document.getElementById("btn");
    if (formData.email.length > 0 && formData.password.length > 0) {
      btn?.classList.remove("opacity-50", "cursor-not-allowed");
    } else {
      btn?.classList.add("opacity-50", "cursor-not-allowed");
    }
  }, [formData]);

  // =========== hndle Fns =========
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = LoginSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: any = {};
      result.error.errors.forEach((error) => {
        fieldErrors[error.path[0]] = error.message;
      });
      setErrors(fieldErrors);
    } else {
      console.log("Form Data: ", result.data);
    }
  };

  return (
    <>
      <div className="relative flex flex-col justify-center items-center pt-28">
        <Back address="/" />

        {/* ======= logo and title ========= */}
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

        {/* ======== Sign In Form ========== */}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center px-6 pb-4"
        >
          {/* ======= Email ========== */}

          <div
            className={`flex justify-start items-center pl-3 mt-11 w-96 h-12 rounded gap-1 bg-[#FAFAFA] ${
              focusedField === "email" ? "border-2 border-black" : ""
            }`}
          >
            <img src="/src/assets/svg/email.svg" alt="email" />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              type="text"
              className="w-full pl-1 bg-transparent h-full py-2 outline-none"
              placeholder="Email"
              autoComplete="email"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-[2px]">{errors.email}</p>
          )}

          {/* ======= Password ========== */}

          <div
            className={`flex justify-between items-center pl-3 mt-4 w-96 h-12 rounded gap-1 bg-[#FAFAFA] ${
              focusedField === "password" ? "border-2 border-black" : ""
            }`}
          >
            <img src="/src/assets/svg/lock.svg" alt="password" />
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField(null)}
              type={showPassword ? "text" : "password"}
              className="w-full px-1 bg-transparent h-full py-2 outline-none"
              placeholder="Password"
              autoComplete="current-password"
            />
            <img
              src={`/src/assets/svg/${showPassword ? "eye-slash" : "eye"}.svg`}
              alt="toggle password visibility"
              className="mr-1 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-[2px]">{errors.password}</p>
          )}

          {/* ====== Help Links =========== */}

          <div className="flex items-center justify-between gap-28 mt-4">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="rememberMe" />
              <label className="text-base font-normal" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-base font-normal cursor-pointer bg-transparent border-none"
            >
              Forgot Password?
            </button>
          </div>

          {/* ====== Footer =========== */}

          <button
            type="submit"
            id="btn"
            className="bg-[#212529] rounded-full w-96 h-12 text-white font-medium text-sm mt-64 opacity-50 cursor-not-allowed"
          >
            Sign In
          </button>

          <div className="flex justify-around items-center mx-auto mt-3 gap-3">
            <p className="text-base font-medium text-[#BAB8BC]">
              Don’t have an account?
            </p>
            <button
              type="button"
              onClick={() => navigate("/sign-up")}
              className="text-base font-normal cursor-pointer bg-transparent border-none"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
