import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export const MobileCurousel = () => {
  //styled component for Navbar
  const SubMain = styled(Carousel)`
        height:420px;
    & .carousel-control-prev-icon,
    .carousel-control-next-icon {
      padding: 10%;
      border-radius: 50%;
      background-color: black;
    }
    & .carousel-indicators > Button {
      width: 5%;
      background-color: black;
      height: 2px;
    }
  `;

  return (
    <div>
      <SubMain>
        <Carousel.Item interval={2000}>
        <img
            className="d-block w-100"
            src="https://images.samsung.com/in/smartphones/galaxy-z-fold3-5g/buy/zfold3_carousel_productimage_phantomblack_pc.jpg?imwidth=1366"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://images.samsung.com/in/smartphones/galaxy-z-fold3-5g/buy/zfold3_carousel_multitasking_kv_pc.jpg?imwidth=1366"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.samsung.com/in/smartphones/galaxy-z-fold3-5g/buy/zfold3_carousel_waterproof_kv_pc.jpg?imwidth=1366"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.samsung.com/in/smartphones/galaxy-z-fold3-5g/buy/zfold3_carousel_productimage_phantomblack_pc.jpg?imwidth=1366"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.samsung.com/in/smartphones/galaxy-z-fold3-5g/buy/zfold3_carousel_productimage_phantomgreen_pc.jpg?imwidth=1366"
            alt="Third slide"
          />
        </Carousel.Item>
      </SubMain>
    </div>
  );
};


