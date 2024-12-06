interface LoadingProps {
  setPage: (value: number) => void;
}

const Welcome: React.FC<LoadingProps> = ({ setPage }) => {
  setTimeout(() => {
    setPage(2);
  }, 3000);

  return (
    <>
      <div className=" text-white relative flex flex-col items-start justify-end">
        <div className="w-full h-screen">
          <img
            className="w-full h-full"
            src="/src/assets/img/welcome-bg.jpg"
            alt="shoes-pic"
          />
        </div>
        <div className="absolute p-8">
          <h2 className="font-semibold text-[40px]">Welcome to 👋</h2>
          <h1 className="font-bold text-7xl">Shoea</h1>
          <p className="text-base font-semibold">
            The best sneakers & shoes e-commerse app of <br />the century  for your
            fashion needs!
          </p>
        </div>
      </div>
    </>
  );
};

export default Welcome;

{
  /* <div className="absolute w-full h-full bg-gradient-to-b from-[#00000000] to-[#000000CC] w-screen h-screen absolute z-0"></div> */
}
