interface LoadingProps {
  setPage: (value: number) => void;
}

const Loading: React.FC<LoadingProps> = ({ setPage }) => {
  //   setTimeout(() => {
  //     setPage(1);
  //   }, 3000);

  return (
    <div className="flex flex-col justify-center items-center pt-96">
      <div className="flex justify-center items-center gap-3 mb-80">
        <div className="w-[59px] h-[59px] rounded-full bg-black flex items-center justify-center">
          <img src="/src/assets/svg/logo.svg" alt="logo-svg" />
        </div>
        <h1 className="text-[52px] font-bold">Shoea</h1>
      </div>
      <div>
        <img src="/src/assets/svg/spinner.svg" alt="spinner.svg" className="animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
