import { useNavigate } from "react-router-dom";

interface Page3Props {
  setPage: (value: number) => void;
}

const Slide3: React.FC<Page3Props> = ({ setPage }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="">
        <img src="/src/assets/img/onboarding-bg-3.jpg" alt="shoes-pic-2" />
      </div>
      <h1 className="text-[32px] font-semibold mt-7">
        Let’s fulfill your fashion needs with shoearight now!
      </h1>
      <div className="flex gap-2 justify-center items-center mt-12">
        <div className="w-8 h-1 bg-gray-500"></div>
        <div className="w-8 h-1 bg-gray-500"></div>
        <div className="w-8 h-1 bg-black"></div>
      </div>
      <button
        onClick={() => {
          setPage(0);
          navigate("/login");
        }}
        className="text-white hover:bg-gray-800 bg-[#212529] rounded-full text-sm font-medium w-96 h-12 mt-10"
        type="submit"
      >
        Get Started
      </button>
    </div>
  );
};

export default Slide3;
