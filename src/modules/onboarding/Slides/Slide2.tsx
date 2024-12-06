interface Page2Props {
  setPage: (value: number) => void;
}

const Slide2: React.FC<Page2Props> = ({ setPage }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="">
        <img src="/src/assets/img/onboarding-bg-2.jpg" alt="shoes-pic-2" />
      </div>
      <h1 className="text-[32px] font-semibold mt-7">
        Your satisfaction is our number one periority
      </h1>
      <div className="flex gap-2 justify-center items-center mt-12">
        <div className="w-8 h-1 bg-gray-500"></div>
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-gray-500"></div>
      </div>
      <button
        onClick={() => setPage(2)}
        className="text-white hover:bg-gray-800 bg-[#212529] rounded-full text-sm font-medium w-96 h-12 mt-10"
        type="submit"
      >
        Next
      </button>
    </div>
  );
};

export default Slide2;
