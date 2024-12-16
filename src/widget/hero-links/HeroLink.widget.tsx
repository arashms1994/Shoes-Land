import { Link } from "react-router-dom";
import { Brand } from "../../types/brands";

interface Props {
  brand: Brand;
}

const HeroLink = ({ brand }: Props) => {
  return (
    <Link
      to={`/Home${brand.href}`}
      className="flex flex-col items-center justify-center gap-3"
    >
      <div className="bg-[#ECECEC] w-[60px] h-[60px] flex items-center justify-center text-center rounded-full">
        <img src={brand.icon} alt={brand.name} />
      </div>
      <p className="text-sm font-semibold text-[#152536]">{brand.name}</p>
    </Link>
  );
};

export default HeroLink;
