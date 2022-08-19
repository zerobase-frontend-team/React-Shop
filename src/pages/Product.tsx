import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

interface ProductData {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

interface State {
  productStore: {
    [key: string]: ProductData[];
  };
}

function Product() {
  const id = getIdFromURL();
  const productData = useSelector(
    (state: State) => state.productStore.search[id],
  );
  const category = getCategory(productData.category);
  const title = productData.title;
  const description = productData;
  const image = productData.image;
  console.log(productData);

  return (
    <section className="main pt-16">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <StyleWrapper>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>{category}</li>
              <li>{title}</li>
            </ul>
          </div>
          <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
            <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
              <img
                src={image}
                alt={title}
                className="object-contain w-full h-72"
              />
            </figure>
            <div className="card-body px-1 lg:px-12">
              <h2 className="card-title">
                {title}
                <span className="badge badge-accent ml-2">NEW</span>
              </h2>
              <p></p>
              <div></div>
              <p></p>
              <div></div>
            </div>
          </div>
        </StyleWrapper>
      </section>
    </section>
  );
}

const getIdFromURL = () => {
  let temp = window.location.href.split('/');
  let id = Number(temp[temp.length - 1]);
  return id;
};

const getCategory = (category: string) => {
  let result = '';

  switch (category) {
    case "men's clothing":
      result = '패션';
      break;
    case "women's clothing":
      result = '패션';
      break;
    case 'jewelery':
      result = '액세서리';
      break;
    case 'electronics':
      result = '디지털';
      break;
    default:
      break;
  }
  return result;
};

export default Product;

const StyleWrapper = styled.div``;
