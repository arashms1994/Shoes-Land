import ProductsContainer from "../../components/product-container/ProductsContainer.components";
import Back from "../../layout/back/Back.layout";

const AllProducts = () => {
  return (
    <>
      <div className="py-4 px-14 flex items-center justify-start">
        <Back address="/home" />
        <p className="text-xl font-semibold">All Brands</p>
      </div>
      <div>
        <ProductsContainer />
      </div>
    </>
  );
};

export default AllProducts;
