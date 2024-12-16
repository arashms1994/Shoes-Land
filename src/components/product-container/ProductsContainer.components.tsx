import { useProducts } from "../../api/Query";
import { Product } from "../../types/type";
import ProductCard from "../../widget/product card/ProductCard.widget";

interface Props {
  products?: Product[];
}

const ProductsContainer = ({ products: propProducts }: Props) => {

  const { products: apiProducts, isLoadingProducts, isErrorProducts } = useProducts();

  const products = propProducts || apiProducts;

  if (isLoadingProducts) return <div>Loading...</div>;
  if (isErrorProducts) return <div>Error loading products.</div>;
  if (!products || products.length === 0) return <div>No products found.</div>;

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
