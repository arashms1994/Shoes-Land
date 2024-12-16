import ProductsContainer from "../../components/product-container/ProductsContainer.components";
import Footer from "../../layout/footer/footer.layout";
import HeroLinksContainer from "../../components/hero-links-container/HeroLinksContainer.components";
import { Brands } from "../../types/brands";
import Header from "../../layout/header/Header.layout";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroLinksContainer brands={Brands} />
      <ProductsContainer />
      <Footer />
    </div>
  );
};

export default Home;
