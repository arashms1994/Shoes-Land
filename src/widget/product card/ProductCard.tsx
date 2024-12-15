import { Product } from "../../types/type";
interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-col items-center justify-start pb-1">
      <div className="rounded-3xl w-[182px] h-[182px]">
        <img
          src={product.images}
          alt=""
          className="w-full h-full rounded-3xl"
        />
      </div>
      <h1 className="font-bold text-xl text-[#152536] mt-3">{product.title}</h1>
      <p className="text-base font-semibold text-[#152536] mt-2">$ {product.price}</p>
    </div>
  );
};

export default ProductCard;
