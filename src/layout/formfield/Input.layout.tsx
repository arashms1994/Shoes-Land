import React, { ReactNode } from "react";

interface InputProps {
  icon: string;
  placeholder: string;
  name: string;
  type: string;
  id: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  customChildren?: ReactNode;
}

export const Input: React.FC<InputProps> = ({
  icon,
  placeholder,
  name,
  type,
  id,
  value,
  onChange,
  onClick,
  customChildren,
}) => {
  return (
    <div className="flex w-full h-9 items-center gap-1 bg-[#FAFAFA] p-[13px] rounded">
      <img src={`/src/assets/svg/${icon}.svg`} alt={icon} />
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="bg-transparent w-full h-9 outline-none"
      />
      {customChildren && <div>{customChildren}</div>}
    </div>
  );
};