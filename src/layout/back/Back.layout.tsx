import React from "react";
import { useNavigate } from "react-router-dom";

interface backProps {
  address: string;
}

const Back: React.FC<backProps> = ({ address }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(address);
  };

  return (
    <div className="w-4 h-4 absolute left-6 top-6" onClick={handleNavigation}>
      <img src="/src/assets/svg/back.svg" alt="back" />
    </div>
  );
};
export default Back;
