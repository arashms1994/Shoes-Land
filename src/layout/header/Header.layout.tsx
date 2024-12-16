const Header = () => {
  return (
    <div className="flex items-center justify-start px-6 py-4 gap-4">
      <div className="rounded-full w-12 h-12">
        <img
          src="/src/assets/svg/user.svg"
          alt="user pic"
          className="rounded-full w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <p className="text-base text-[#757475] font-medium">Good Morning 👋</p>
        <p className="text-base text-[#152536] font-bold">Saeed Abdilar</p>
      </div>
    </div>
  );
};

export default Header;
