import { useNavigate } from "react-router-dom";
import Back from "../../../layout/back/Back.layout";
import { useEffect, useState } from "react";

const ForGotPassWord = () => {
  const navigate = useNavigate();
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });

  useEffect(() => {
    const btn = document.getElementById("btn");
    if (
      formData.email.length > 0 ) {
      btn?.classList.remove("opacity-50", "cursor-not-allowed");
    } else {
      btn?.classList.add("opacity-50", "cursor-not-allowed");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <>
      <Back address="/login" />
      <div className="flex flex-col items-center justify-center pt-28 px-6">
        <div className="w-14 h-20">
          <img
            src="/src/assets/svg/logo-black.svg"
            alt="Shoea-logo"
            className="w-full h-full"
          />
        </div>
        <h1 className="font-semibold text-3xl text-[#152536] mt-28">
          Forgot Password
        </h1>
        <div
          className={`flex justify-start items-center pl-3 mt-11 w-96 h-12 rounded gap-1 bg-[#FAFAFA] ${
            focusedField === "email" ? "border-2 border-black" : ""
          }`}
        >
          <img src="/src/assets/svg/costumer.svg" alt="email" />
          <input
            name="email"
            value={FormData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            type="text"
            className="w-full pl-1 bg-transparent h-full py-2 outline-none"
            placeholder="Username / Email"
            autoComplete="email"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs mt-[2px]">{errors.email}</p>
        )}
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="text-lg mt-2 font-normal cursor-pointer bg-transparent border-none ml-auto"
        >
          Back to sign in
        </button>
        <button
          type="submit"
          id="btn"
          className="bg-[#212529] rounded-full w-96 h-12 text-white font-medium text-sm mt-80 opacity-50 cursor-not-allowed"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default ForGotPassWord;
