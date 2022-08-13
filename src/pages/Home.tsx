import Carousel from '../components/Carousel';
import ProductList from '../components/ProductList';

function Home() {
  return (
    <>
      <Carousel />
      <ProductList page="home" category="fashion" />
      <ProductList page="home" category="accessory" />
      <ProductList page="home" category="digital" />
    </>
  );
}

export default Home;
