import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-12 py-3 bottom-0 fixed w-full bg-white">
      <Link to={"/home"} className="flex items-center justify-center flex-col">
        <img
          src="/src/assets/svg/home.svg"
          alt="home icon"
          className="w-5 h-5"
        />
        <p className="text-[12px] text-[#152536] font-semibold">Home</p>
      </Link>
      <Link to={"/home"} className="flex items-center justify-center flex-col">
        <img
          src="/src/assets/svg/cart.svg"
          alt="cart icon"
          className="w-5 h-5"
        />
        <p className="text-[12px] text-[#152536] font-semibold">Cart</p>
      </Link>
      <Link to={"/home"} className="flex items-center justify-center flex-col">
        <img
          src="/src/assets/svg/orders.svg"
          alt="orders icon"
          className="w-5 h-5"
        />
        <p className="text-[12px] text-[#152536] font-semibold">Orders</p>
      </Link>
      <Link to={"/home"} className="flex items-center justify-center flex-col">
        <img
          src="/src/assets/svg/wallet.svg"
          alt="wallet icon"
          className="w-5 h-5"
        />
        <p className="text-[12px] text-[#152536] font-semibold">Wallet</p>
      </Link>
      <Link to={"/home"} className="flex items-center justify-center flex-col">
        <img
          src="/src/assets/svg/profile.svg"
          alt="profile icon"
          className="w-5 h-5"
        />
        <p className="text-[12px] text-[#152536] font-semibold">Profile</p>
      </Link>
    </div>
  );
};

export default Footer;
