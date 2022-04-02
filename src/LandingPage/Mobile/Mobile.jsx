import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
export const Mobile = () => {
  //styled component for Navbar

  const SubMain = styled(Carousel)`
  & .carousel-control-prev-icon,
  .carousel-control-next-icon {
    padding: 10%;
    border-radius: 50%;
    background-color: transparent;
    color: transparent;
  }
  & .carousel-indicators > Button {
      
          
    width: 5%;
    background-color: black;
    height: 1px;
  }
    & .carousel-indicators {
        bottom: 680px;
    }
  `;
  return (
    <div>
      <SubMain >
        <Carousel.Item  >
        <img
        className="d-block w-100"
        src="../../Image/a.png"
        alt="Second slide"
      />
          
      
        </Carousel.Item>
        <Carousel.Item  >
          <img
            className="d-block w-100"
            src="../../Image/b.png"
            alt="Second slide"
          />
       
        </Carousel.Item>
        <Carousel.Item  >
          <img
            className="d-block w-100"
            src="../../Image/c.png"
            alt="Third slide"
          />
         
        </Carousel.Item>


        <Carousel.Item  >
        <img
        className="d-block w-100"
        src="../../Image/d.png"
        alt="Second slide"
      />
         
        </Carousel.Item>

        
        <Carousel.Item  >
        <img
        className="d-block w-100"
        src="../../Image/e.png"
        alt="Second slide"
      />
         
        </Carousel.Item>







      </SubMain>
    </div>
  );
};