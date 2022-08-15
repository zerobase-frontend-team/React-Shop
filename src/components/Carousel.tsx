import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

import fashionImage from '../assets/carousel/fashion.jpeg';
import digitalImage from '../assets/carousel/digital.jpeg';
import foodImage from '../assets/carousel/food.jpeg';

interface SlideData {
  image: string;
  title: string;
  content: string;
  path: string;
}

function Slide({ image, title, content, path }: SlideData) {
  return (
    <div className="h-80 md:h-full">
      <img src={image} className="h-full" />
      <div className="absolute transform -translate-y-1/2 left-20 top-1/2">
        <div className="text-white text-left">
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
          <p className="py-4">{content}</p>
          <button className="btn">
            <Link to={path}>바로가기 &#8594;</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

// component이름을 Comp로 한 이유는 위의 Carousel과 겹치기 때문입니다.
function Comp() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showThumbs={false}
      showStatus={false}
    >
      <Slide
        image={fashionImage}
        title={'물빠진 청바지!'}
        content={'이제 막 도착한 패션 청바지를 구경해 보세요.'}
        path={'/fashion'}
      />
      <Slide
        image={digitalImage}
        title={'신속한 업무처리!'}
        content={'다양한 디지털 상품을 둘러보세요.'}
        path={'/digital'}
      />
      <Slide
        image={foodImage}
        title={'신선한 식품!'}
        content={'농장 직배송으로 더욱 신선한 식료품을 만나보세요.'}
        path={'/food'}
      />
    </Carousel>
  );
}

export default Comp;
