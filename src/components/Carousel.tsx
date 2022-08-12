import fashionImage from '../assets/carousel/fashion.jpeg';
import digitalImage from '../assets/carousel/digital.jpeg';
import foodImage from '../assets/carousel/food.jpeg';
import { useEffect } from 'react';

const slideNumber = 3;

interface SlideData {
  id: number;
  title: string;
  content: string;
  image: string;
}

function Slide({ id, title, content, image }: SlideData) {
  const prev = id === 1 ? slideNumber : id - 1;
  const next = id === slideNumber ? 1 : id + 1;

  return (
    <div
      id={`slide${id}`}
      className="carousel-item relative w-full h-80 md:h-auto"
    >
      <img src={image} className="w-full" />
      <div className="absolute hidden md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle" id="next-button">
          ❯
        </a>
      </div>
      <div className="absolute transform -translate-y-1/3 left-20 top-1/2">
        <div className="hero-content">
          <div className="max-w-md text-white">
            <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
            <p className="py-6">{content}</p>
            <button className="btn-sm md:btn-md btn-primary">
              바로가기 &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Carousel() {
  // 슬라이드 자동으로 움직이게 하기
  useEffect(() => {
    let id = 0;
    setInterval(() => {
      const $nextButtons = document.querySelectorAll('#next-button');
      if ($nextButtons) {
        const $nextButton = $nextButtons[id] as HTMLAnchorElement;
        $nextButton.click();
        if (id === slideNumber - 1) {
          id = 0;
        } else {
          id++;
        }
      }
    }, 3000);
  }, []);

  return (
    <div id="wrapper" className="relative">
      <div className="carousel w-full">
        <Slide
          id={1}
          title={'물빠진 청바지!'}
          content={'이제 막 도착한 패션 청바지를 구경해 보세요.'}
          image={fashionImage}
        />
        <Slide
          id={2}
          title={'신속한 업무처리!'}
          content={'다양한 디지털 상품을 둘러보세요.'}
          image={digitalImage}
        />
        <Slide
          id={3}
          title={'신선한 식품!'}
          content={'농장 직배송으로 더욱 신선한 식료품을 만나보세요.'}
          image={foodImage}
        />
      </div>
      <div className="flex md:hidden justify-center w-full py-2 gap-2 absolute bottom-4 left-1/2 -translate-x-1/2">
        {[1, 2, 3].map((item) => {
          return (
            <a href={`#slide${item}`} className="btn btn-xs" key={item}>
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
