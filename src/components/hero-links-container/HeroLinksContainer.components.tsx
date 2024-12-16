import { Brand } from "../../types/brands";
import HeroLink from "../../widget/hero-links/HeroLink.widget";

interface Props {
  brands: Brand[];
}

const HeroLinksContainer = ({ brands }: Props) => {
  return (
    <div className="flex flex-wrap px-8 py-6 gap-10">
      {brands.map((brand) => (
        <HeroLink key={brand.name} brand={brand} />
      ))}
    </div>
  );
};

export default HeroLinksContainer;
